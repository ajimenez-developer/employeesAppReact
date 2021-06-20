import { Form, FormikProps } from "formik";
import React from "react";
import Select from "react-select"
import { sentence } from "../../../../../const/texts";
import { ButtonForm, ContainerButtonsForm, InlineErrorMessage, Input, Label } from "../../../../../theme/form.styles";
import { WorkOption } from "../../EmployeePositions.models";

interface State {
  hasEmployee: boolean
}

interface Props {
  handleEmployeesList: (values: any) => void
  positions: WorkOption[]
  onClose: () => void
}


class NewEmployeeFormView extends React.Component<Props & FormikProps<any>, State> {
  render() {
    return (
      <Form>
        <Label htmlFor="name">
        {sentence.name} 
          <Input required name="name" type="text" placeholder={sentence.name} autoComplete="off" 
            valid={this.props.touched?.name && !this.props.errors?.name ? 'true' : 'false'}
            error={this.props.touched?.name && this.props.errors?.name}/>
        </Label>
        {this.props.errors.name && this.props.touched.name && (
          <InlineErrorMessage>
            {this.props.errors.name}
          </InlineErrorMessage>
        )}
        <Label htmlFor="surname">
        {sentence.surname} 
          <Input required name="surname" type="text" placeholder={sentence.surname} autoComplete="off" 
            valid={this.props.touched?.surname && !this.props.errors?.surname ? 'true' : 'false'}
            error={this.props.touched?.surname && this.props.errors?.surname}/>
        </Label>        
        {this.props.errors.surname && this.props.touched.surname && (
          <InlineErrorMessage>
            {this.props.errors.surname}
          </InlineErrorMessage>
        )}
        <Label htmlFor="dateOfBirth">
          {sentence.dateOfBirthday}
          <Input required name="dateOfBirth" type="Date" placeholder="DD/MM/YYYY"
            valid={this.props.touched.dateOfBirth && !this.props.errors.dateOfBirth ? 'true' : 'false'}
            error={this.props.touched.dateOfBirth && this.props.errors.dateOfBirth}/>
        </Label>
        {this.props.errors.dateOfBirth && this.props.touched.dateOfBirth && (
          <InlineErrorMessage>
            {this.props.errors.dateOfBirth}
          </InlineErrorMessage>
        )}
        <Label htmlFor="workPosition">
        {sentence.position}
        </Label>
        <Select
          options={this.props.positions} 
          name="workPosition" 
          onChange={(value) => this.props.setFieldValue('workPosition', value)}
          valid={this.props.touched.workPosition && !this.props.errors.workPosition ? 'true' : 'false'}
          error={this.props.touched.workPosition && this.props.errors.workPosition}
        />
        {this.props.errors.workPosition && this.props.touched.workPosition && (
          <InlineErrorMessage>
            {this.props.errors.workPosition}
          </InlineErrorMessage>
        )}
        <ContainerButtonsForm>
          <ButtonForm type="button" isSecondary onClick={this.props.onClose}>{sentence.cancel}</ButtonForm>
          <ButtonForm disabled={this.disabledButton(this.props.errors, this.props.values)} type="submit">{sentence.accept}</ButtonForm>
        </ContainerButtonsForm>
      </Form>
    )
  }

  private disabledButton = (errors: any, values: any): boolean => {
    if (!errors.name &&
      !errors.surname &&
      !errors.dateOfBirth &&
      !errors.workPosition &&
      Object.values(values).length !== 0)
      return false
    return true
  }
}

export default NewEmployeeFormView