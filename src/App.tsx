import React from 'react';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import { EmployeePanelViewRaw } from './components/views/EmployeePanel/EmployeePanel.view';
import { AppWrapper } from './theme/general.styles';

export class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <AppWrapper>
            <EmployeePanelViewRaw/>
        </AppWrapper>
        <Footer/>
      </>
  )}
}