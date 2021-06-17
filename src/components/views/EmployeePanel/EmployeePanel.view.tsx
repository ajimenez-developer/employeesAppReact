import axios from 'axios';
import React from 'react';
import { sentence } from '../../../const/texts';
import { Label } from '../../../theme/form.styles';
import { InputGeneral } from '../../../theme/general.styles';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import Sticker from '../../common/Sticker/Sticker';
import { StickerInfo } from '../../common/Sticker/Sticker.models';
import { EditEmployeeFormRaw } from './components/EditEmployeeForm/EditEmployeeForm';
import { EmployeesTable } from './components/EmployeesTable';
import { NewEmployee, NewEmployeeState } from './components/NewEmployeeForm/NewEmployeeData.models';
import { NewEmployeeFormView } from './components/NewEmployeeForm/NewEmployeeForm';
import { RemoveEmployeeFormView } from './components/RemoveEmployeeForm/RemoveEmployeeForm.view';
import { ButtonsContainer, InputWrapper, MainWrapper, SearchContainer, LabelWrapper } from './EmployeePanel.styles';
import { EmployeePositions, WorkOption } from './EmployeePositions.models'


interface State {
  showAddModal: boolean
  showEditModal: boolean
  showRemoveModal: boolean
  employeesList: NewEmployeeState[]
  employeesListFilter: NewEmployeeState[]
  nameEmployee: string
  positions: EmployeePositions
  infoEmployeesUpdate: boolean
  infoSticker: StickerInfo
}


const employeesList: NewEmployeeState[] = []
const urlPositions = 'http://ibillboard.com/api/positions'
let positionsAPI: EmployeePositions
let numbersOfPositions: number = 0
let employeePositions: WorkOption[] = []
let workPosition: WorkOption

export class EmployeePanelViewRaw extends React.Component<{}, State> {
  state: State = {
    showAddModal: false,
    showEditModal: false,
    showRemoveModal: false,
    employeesList: [],
    employeesListFilter: [],
    nameEmployee: '',
    positions: {
      positions: []
    },
    infoEmployeesUpdate: false,
    infoSticker: {
      name: '',
      message:'',
    }
  }

  componentDidMount() {
    this.state.positions.positions.length === 0 && this.getPositions()
  }

  render() {
    return (
      <>            
        <ButtonsContainer>
          <span data-testid="button-add"><Button text={sentence.addEmployee} onClick={this.openAddModal} /></span>
          <span data-testid="button-edit"><Button disabled={this.state.employeesList.length === 0} text={sentence.editEmployee} onClick={this.openEditModal} /></span>
          <Button data-testid="button-remove" disabled={this.state.employeesList.length === 0} isSecondary={true} text={sentence.deleteEmployee} onClick={this.openRemoveModal} />
        </ButtonsContainer>
        {this.state.showAddModal && 
          <Modal
            title={sentence.newEmployee}
            show
            onClose={this.isCloseModal}
            children={
              <NewEmployeeFormView handleEmployeesList={this.handleEmployeesList} positions={employeePositions} onClose={this.isCloseModal}/>
            }
          />
        }
        {this.state.showEditModal && 
          <Modal
            title={sentence.editEmployee}
            show
            onClose={this.isCloseModal}
            children={
              <EditEmployeeFormRaw 
              listEmployee={this.state.employeesList}
              positions={employeePositions} 
              updateEmployeeList={this.updateOrRemoveEmployee}
              onClose={this.isCloseModal}
            />
            }
          />
        } 
        {this.state.showRemoveModal && 
          <Modal
            title={sentence.deleteEmployee}
            show
            onClose={this.isCloseModal}
            children={
              <RemoveEmployeeFormView listEmployee={this.state.employeesList} removeEmployee={this.updateOrRemoveEmployee} onClose={this.isCloseModal}/>
            }
          />
        } 
        <MainWrapper> 
          <SearchContainer>
            <LabelWrapper>
              <Label>Search a employee: </Label>
            </LabelWrapper>
            <InputWrapper>
              <InputGeneral disabled={this.state.employeesList.length === 0} 
                value={this.state.nameEmployee} 
                onChange={(text) => this.filter(text)} 
                placeholder={sentence.placeholderSearch}
              />
            </InputWrapper>
          </SearchContainer>
          <EmployeesTable employees={this.state.employeesListFilter?.length > 0 ? this.state.employeesListFilter : this.state.employeesList} />
        </MainWrapper>
        {this.state.infoEmployeesUpdate && 
        <Sticker infoSticker={this.state.infoSticker} onClose={this.closSticker}/>
        }
      </>
  )}


  filter(event: any){
    var name = event.target.value
    const data = this.state.employeesList
    const newData = data.filter(function(item:any){
        const itemData = item.name.toUpperCase()
        const textData = name.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
      employeesListFilter: newData,
      nameEmployee: name,
    })
 }

  private openAddModal = () => {
    this.setState({
      showAddModal: true,
      infoEmployeesUpdate: false
    })
  }

  private openEditModal = () => {
    this.setState({
      showEditModal: true,
      infoEmployeesUpdate: false
    })
  }

  private openRemoveModal = () => {
    this.setState({
      showRemoveModal: true,
      infoEmployeesUpdate: false
    })
  }

  
  private isCloseModal = () => {
    this.setState({
      showAddModal: false,
      showEditModal: false,
      showRemoveModal: false,
      employeesListFilter: []
    })
  }

  private closSticker = () => {
    this.setState({
      infoEmployeesUpdate: false,
    })
  }

  private handleEmployeesList = (newEmployee: NewEmployee) => {
    this.registerEmployee(newEmployee)
  }

  private registerEmployee = (values: NewEmployee) => {
    let newEmployee : NewEmployeeState = {
      id: this.state.employeesList.length + 1,
      name: values.name,
      surname: values.surname,
      workPosition: values.workPosition.label,
      dateOfBirth: values.dateOfBirth,
    }
  
    employeesList.push(newEmployee)
    
    this.setState({
      employeesList,
      infoEmployeesUpdate: true,
      infoSticker: {
        name: newEmployee.name,
        message: sentence.msgNewEmployee
      }
    })
  }

  private updateOrRemoveEmployee = (idEmployee: number, updatedEmployee?: NewEmployee) => {
    const { employeesList } = this.state
    let nameEmployeeDeleted: string = ""

    employeesList.forEach(employee => {
      if(employee.id === +idEmployee){
        employeesList.splice(employeesList.indexOf(employee), 1)
        nameEmployeeDeleted = employee.name
      }
    })
    
    if(updatedEmployee) {
      let employeeFormatted: NewEmployeeState = {
        id: updatedEmployee.id,
        name: updatedEmployee.name,
        surname: updatedEmployee.surname,
        workPosition: updatedEmployee.workPosition.label,
        dateOfBirth: updatedEmployee.dateOfBirth,   
      }
      employeesList.push(employeeFormatted)
    }

    employeesList.sort(function (a, b){
      return (a.id - b.id)
    })
    this.setState({
      employeesList,
      infoEmployeesUpdate: true,
      infoSticker: {
        name: nameEmployeeDeleted,
        message: updatedEmployee ? sentence.msgUpdateEmployee : sentence.msgDeleteEmploye
      }
    })
  }

  getPositions = async () => {
    await axios.get(urlPositions)
      .then(res => {
        positionsAPI = res.data
        numbersOfPositions = positionsAPI.positions.length
        this.mapperPositionsToOptions(numbersOfPositions, positionsAPI)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  mapperPositionsToOptions = (numberOfPositions: number, resApi: any) => {   
    for (let i = 0; i < numberOfPositions; i++) {
      workPosition = {
        value: i,
        label: resApi.positions[i]
      }
      employeePositions.push(workPosition)
    }
  }
}

export const EmployeePanelView = (EmployeePanelViewRaw)