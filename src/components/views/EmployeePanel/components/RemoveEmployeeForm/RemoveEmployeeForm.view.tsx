import React from "react"
import { sentence } from "../../../../../const/texts"
import { ButtonForm, ContainerButtonsForm, FormContainer, Label } from "../../../../../theme/form.styles"
import { SelectOption } from "../../../../../theme/general.styles"
import { NewEmployeeState } from "../NewEmployeeForm/NewEmployeeData.models"

interface State {
  hasEmployee: boolean
}

interface Props {
  removeEmployee: (idEmployeeRemove: number) => void
  listEmployee: NewEmployeeState[]
  onClose: () => void
}

let idEmployeeRemove: number = 0

export class RemoveEmployeeFormView extends React.Component<Props, State> {
  state: State = {
    hasEmployee: false,
  }

  handleChangeValue = (event: any) => {
    idEmployeeRemove= event.target.value
    this.setState({
      hasEmployee: true
    })
  }

  render() {
    const { listEmployee } = this.props
    return (
      <FormContainer>         
        <Label htmlFor="selectEmployee">
          {sentence.removeQuestion}
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

        <ContainerButtonsForm>
          <ButtonForm isSecondary onClick={this.props.onClose} type="button">{sentence.cancel}</ButtonForm>
          <ButtonForm 
            onClick={() => {
              this.props.removeEmployee(idEmployeeRemove)
              this.props.onClose()}
              }>{sentence.accept}
          </ButtonForm>
        </ContainerButtonsForm>
      }     
      </FormContainer>
    )
  }
}

export const RemoveEmployeeForm = (RemoveEmployeeFormView)