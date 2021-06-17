import { fireEvent, render, screen } from '@testing-library/react';

import { EmployeePanelViewRaw } from '../EmployeePanel.view';


// import { shallow } from 'enzyme'

// test('Search button Add Employee', () => {
//   render(<EmployeePanelViewRaw />);
//   const buttonAddEmployee = screen.getByText(/Add employee/i);
//   expect(buttonAddEmployee).toBeInTheDocument();
// });

describe('Access to app', () => {
  it('We have the Add employee button', async () => {
    render(<EmployeePanelViewRaw />);
    const buttonAddEmployee = screen.getByTestId('button-add');
    fireEvent.click(buttonAddEmployee)

    expect(
       screen.findByText('New employee'),
    ).toBeDefined()
  })

})

describe('Access to app', () => {
  it('We have the Edit employee button', async () => {
    render(<EmployeePanelViewRaw />);
    const buttonEditEmployee = screen.getByTestId('button-edit');
    expect(buttonEditEmployee).toBeDisabled()
  })

})






  // it('We have the Edit employee button', () => {
  //   const buttonEditEmployee = screen.getByTestId('button-edit');
  //   expect(buttonEditEmployee).toBeInTheDocument();
  // })
  // it('se hace la llamada al servicio', async () => {
  //   const xxx = jest
  //     // .spyOn(getPositions())

  //     const response = await getPositions()
  // })

  // serve.use(
  //   rest.get(
  //     `http://ibillboard.com/api/positions`,
  //     (_req, res, ctx) => {
  //       return res(ctx.status(200), ctx.json({"positions":["full-stack developer","front-end developer","sw admin","help desk","scrum master","product manager"]}))
  //     }
  //   )
  // )


