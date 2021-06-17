import { WorkOption } from "../../EmployeePositions.models";

export interface NewEmployee {
  id: number
  name: string
  surname: string
  workPosition: WorkOption
  dateOfBirth: Date
}


export interface NewEmployeeState {
  id: number
  name: string
  surname: string
  workPosition: string
  dateOfBirth: Date
}