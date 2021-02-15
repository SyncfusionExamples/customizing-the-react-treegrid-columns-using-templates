import React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,
         Inject, Page} from '@syncfusion/ej2-react-treegrid';
import { employeedata } from './datasource';
import {CheckBoxComponent} from '@syncfusion/ej2-react-buttons';
import './App.css';

function App() { 
  const customizeHeader =(props: any) =>{
    return <span className="e-icon-userlogin e-headerCell">Emp ID</span>
  }
  const columnTemplate =(props: any) =>{
    return <img className="tempImg" src={'https://ej2.syncfusion.com/react/demos/src/treegrid/images/' + props.FullName + '.png'} alt=""/>
  }
  const conditionalTemplate =(props:any) =>{
    return <div><CheckBoxComponent checked={props.Active}></CheckBoxComponent></div>
  }
  return (
    <TreeGridComponent dataSource={employeedata} 
    childMapping="subtasks" treeColumnIndex={1} 
    allowPaging={true}>
      <Inject services={[Page]} /> 
      <ColumnsDirective>
      <ColumnDirective headerText="Employee Image" width="140" template={columnTemplate}></ColumnDirective>
        <ColumnDirective headerTemplate={customizeHeader} 
        field = 'EmpID' textAlign="Center"></ColumnDirective>
        <ColumnDirective headerText = 'Employee Name' 
        field = 'Name'></ColumnDirective>
        <ColumnDirective headerText = 'Employee Details' 
        field ="Address"></ColumnDirective>
        <ColumnDirective headerText="Active Status" textAlign="Center" template={conditionalTemplate}></ColumnDirective>
      </ColumnsDirective>                  
    </TreeGridComponent>
  );
}

export default App;