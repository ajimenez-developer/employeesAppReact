import { Form, FormikErrors, FormikProps } from "formik"
import React from "react"
import { Separator } from "../../../../../theme/general.styles"
import Select from "react-select"
import { ButtonForm, ContainerButtonsForm, InlineErrorMessage, Input, Label } from "../../../../../theme/form.styles";
import { NewEmployeeState } from "../NewEmployeeForm/NewEmployeeData.models"
import { WorkOption } from "../../EmployeePositions.models";
import { sentence } from "../../../../../const/texts";

interface State {
  nameChanged: boolean
  employeeData: NewEmployeeState
}

interface Props {
  updateEmployeeList: ( idEmployeeEdited: number, values: any) => void
  listEmployee: NewEmployeeState[]
  positions: WorkOption[]
  onClose: () => void
  indexPositionSelected: number
}

export class EditEmployeeFormView extends React.Component<Props & FormikProps<any>, State> {
  state: State = {
    nameChanged: false,
    employeeData: {
      id: 0,
      name: '',
      surname: '',
      workPosition: '',
      dateOfBirth: new Date(),
    }
  }
  render() {
    return (
      <>
        <Separator>
          <Form>
            <Label htmlFor="name">
            {sentence.name}
              <Input name="name" type="text" autoComplete="off" placeholder={sentence.name} 
                valid={this.props.touched?.name && !this.props.errors?.name ? 'true' : 'false'}
                error={this.props.touched?.name && this.props.errors?.name}/>
            </Label>
            {this.props.errors.name && this.props.touched.name && (
              <InlineErrorMessage>
                {this.props.errors.name}
              </InlineErrorMessage>
            )}
            <Label htmlFor="workPosition">
            {sentence.position}
            </Label>
            <Select
              options={this.props.positions} 
              name="workPosition" 
              onChange={(value) => this.props.setFieldValue('workPosition', value)}
              defaultValue={this.props.positions[this.props.indexPositionSelected]}
            />
            <ContainerButtonsForm>
              <ButtonForm isSecondary onClick={this.props.onClose} type="button">{sentence.cancel}</ButtonForm>
              <ButtonForm disabled={this.disabledButton(this.props.errors, this.props.values, this.props.initialValues)} type="submit">{sentence.accept}</ButtonForm>
            </ContainerButtonsForm>
          </Form>
        </Separator>
      </>
    )
  }
  
  private disabledButton = (errors: FormikErrors<any>, values: any, initialValues: any): boolean => {
    if (initialValues !== values && !errors.name)
      return false
    return true
  }
}

export const EditEmployeeForm = (EditEmployeeFormView)