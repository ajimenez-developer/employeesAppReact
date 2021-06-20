import React from "react"
import { NewEmployeeState } from "../NewEmployeeForm/NewEmployeeData.models"
import { TableContainer } from "./EmployeesTable.styles"

interface Props {
  employees: NewEmployeeState[]
}

export class EmployeesTableView extends React.Component<Props> {
  render() {
    const { employees } = this.props
    return (
      <TableContainer>            
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Position</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0
            ? (    
              employees.map((employee) => {
                return(
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.surname}</td>
                    <td>{employee.workPosition}</td>
                    <td>{employee.dateOfBirth.toString().split('-').reverse().join('/')}</td>
                  </tr>
                )
              })
            )
            : this.renderEmpty()
            }
          </tbody>
        </table>
        </TableContainer>  
  )}
  
  renderEmpty = () => {
    return(
      <tr>
        <td colSpan={4} className="empty">Come on, add a new employee!</td>
      </tr>
    )
  }
}

export const EmployeesTable = (EmployeesTableView)