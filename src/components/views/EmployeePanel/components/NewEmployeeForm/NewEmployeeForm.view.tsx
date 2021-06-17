import { Field, Form, Formik } from "formik"
import React from "react"
import { sentence } from "../../../../../const/texts"
// import Select from "react-select"
import { WorkOption } from "../../EmployeePositions.models"

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

export class NewEmployeeFormView extends React.Component<Props, State> {
  state: State = {
    nameEmployee: '',
    surnameEmployee: '',
    workPositionEmployee: '',
    dateOfBirthEmployee: '',
  }

  render() {
    return (
      <>          
      <Formik
        initialValues={{ 
          name: this.state.nameEmployee, 
          surname: this.state.surnameEmployee, 
          workPosition: this.state.workPositionEmployee, 
          dateOfBirth: this.state.dateOfBirthEmployee
        }}
        onSubmit={(values, {resetForm}) => {
            this.props.handleEmployeesList(values);
            this.props.onClose();
            resetForm({});
          }
        }
      >
        <Form>
          <Field required name="name" type="text" placeholder={sentence.name} />
          <Field required name="surname" type="text" placeholder={sentence.surname} />
          {/* <Field required as="select" name="workPosition" placeholder="Position">
            {this.props.positions.forEach(position => {
               (
                <option value="position">{position}</option>              
                )
            })}
          </Field> */}
          {/* <Select 
          options={this.props.positions} 
          name="workPosition" 
          // onChange={this.handleChange.bind(this)}
          />   */}
          <Field required name="dateOfBirth" type="Date" placeholder="DD/MM/YYYY"/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      </>
  )}
}

export const NewEmployeeFormA = (NewEmployeeFormView)

