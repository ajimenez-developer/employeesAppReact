import { fireEvent, render, screen } from '@testing-library/react';

import { EmployeePanelViewRaw } from '../EmployeePanel.view';

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
