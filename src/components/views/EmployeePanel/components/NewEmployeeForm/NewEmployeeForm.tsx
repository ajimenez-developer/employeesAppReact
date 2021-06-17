import { Formik } from "formik"
import React from "react"
import { FormContainer } from "../../../../../theme/form.styles";
import { WorkOption } from "../../EmployeePositions.models"
import NewEmployeeFormSegundoView from "./NewEmployeeFormSegundo.view"
import * as Yup from "yup";
import { sentence } from "../../../../../const/texts";


interface State {
  nameEmployee: string
  surnameEmployee: string
  workPositionEmployee: string
  dateOfBirthEmployee: string
}

interface Props {
  handleEmployeesList: (values: any) => void
  positions: WorkOption[]
  onClose: () => void
}

let minimumDateOfHire: Date = new Date()

export class NewEmployeeFormView extends React.Component<Props, State> {
  state: State = {
    nameEmployee: '',
    surnameEmployee: '',
    workPositionEmployee: '',
    dateOfBirthEmployee: '',
  }

  componentDidMount() {
    minimumDateOfHire = new Date()
  }

  componentWillUnmount() {
    
    minimumDateOfHire = new Date()
  }

  render() {
    return (
      <>
        <FormContainer>          
          <Formik
            initialValues={{ 

            }}
            validationSchema={
              Yup.object().shape({
                name: Yup.string()
                  .min(2, sentence.nameShort)
                  .max(15, sentence.nameLarge)
                  .required(sentence.requiredName),
                surname: Yup.string()
                  .min(2, sentence.surnameShort)
                  .max(15, sentence.surnameLarge)
                  .required(sentence.requiredSurname),
                dateOfBirth: Yup.date()
                  .required(sentence.requiredBirthday)
                  .max(this.getMinHiringAge()),
                workPosition: Yup.object()
                  .shape({
                    label: Yup.string()
                    .required(sentence.requiredPosition)
                  })
              })
            }
            render={(formikProps) => (
              <NewEmployeeFormSegundoView
              {...formikProps}
              handleEmployeesList={this.props.handleEmployeesList} 
              positions={this.props.positions} 
              onClose={this.props.onClose} />
            )}  
            onSubmit={(values, {resetForm}) => {
              this.props.handleEmployeesList(values);
              this.props.onClose();
              resetForm({});
            }}   
          />
        </FormContainer>
      </>
    )
  }

  private getMinHiringAge = ():Date => {
    minimumDateOfHire?.setFullYear(minimumDateOfHire?.getFullYear()-9)
    return minimumDateOfHire
  }
}

export const NewEmployeeForm = (NewEmployeeFormView)