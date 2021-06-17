import { Formik } from "formik"
import React from "react"
import { Label, FormContainer } from "../../../../../theme/form.styles";
import { SelectOption } from "../../../../../theme/general.styles"
import { NewEmployeeState } from "../NewEmployeeForm/NewEmployeeData.models"
import { WorkOption } from "../../EmployeePositions.models";
import { EditEmployeeFormView } from "./EditEmployeeForm.view";
import * as Yup from "yup";
import { sentence } from "../../../../../const/texts";

interface State {
  hasEmployee: boolean
  employeeData: NewEmployeeState  
  indexPosition: number
}

interface Props {
  updateEmployeeList: ( idEmployeeEdited: number, values: any) => void
  listEmployee: NewEmployeeState[]
  positions: WorkOption[]
  onClose: () => void
}

export class EditEmployeeFormRaw extends React.Component<Props, State> {
  state: State = {
    hasEmployee: false,
    employeeData: {
      id: 0,
      name: '',
      surname: '',
      workPosition: '',
      dateOfBirth: new Date(),
    },
    indexPosition: 0
  }

  handleChangeValue = (event?: any) => {
    event.preventDefault();
    this.getEmployeeSelected(event.target.value)
    this.setState({
      hasEmployee: true
    })
  }

  render() {
    const { listEmployee, positions } = this.props
    return (
      <FormContainer>
        <Label htmlFor="selectEmployee">
        {sentence.editQuestion}
        </Label>
        <SelectOption name="selectEmployee" onChange={this.handleChangeValue}>
          <option>{sentence.select}</option>
          {listEmployee.map((employee, key) => {
              return(
                <option key={key} value={employee.id}>
                  {employee.id+'- '+employee.name+' '+employee.surname}
                </option>
              )
            },            
            )
          }
        </SelectOption> 
        {this.state.hasEmployee && 
          (
          <Formik
            initialValues={{ 
              id: this.state.employeeData.id,
              name: this.state.employeeData.name,
              surname: this.state.employeeData.surname,
              dateOfBirth: this.state.employeeData.dateOfBirth,
              workPosition: this.state.employeeData.workPosition, 
            }}            
            validationSchema={
              Yup.object().shape({
                name: Yup.string()
                  .min(2, sentence.nameShort)
                  .max(15, sentence.nameLarge)
                  .required(sentence.requiredName),
              })
            }
            render={(formikProps) => (
              <EditEmployeeFormView
                {...formikProps}
                listEmployee={this.props.listEmployee}
                positions={positions} 
                updateEmployeeList={this.props.updateEmployeeList}
                onClose={this.props.onClose}
                indexPositionSelected={this.state.indexPosition}
              />
            )}
            onSubmit={(values, {resetForm}) => {
                this.props.updateEmployeeList(this.state.employeeData.id, values);
                this.props.onClose();
                resetForm({});
              }
            }
          >
          </Formik>)
        }   
      </FormContainer>
  )}

  private getEmployeeSelected = (key: number) => {
    const {listEmployee} = this.props

    this.getIndexPositionEmployeeSelected(key)

    this.setState({
      employeeData: listEmployee[key-1],
    })
  }

  private getIndexPositionEmployeeSelected(key: number) {
    const {listEmployee} = this.props
    let position = listEmployee[key-1].workPosition;
    let objPosition = this.props.positions.find(pos => pos.label === position)

    if(objPosition) {
      this.setState({
        indexPosition: +objPosition.value
      })
    }
  }
}

export const EditEmployeeForm = (EditEmployeeFormRaw)