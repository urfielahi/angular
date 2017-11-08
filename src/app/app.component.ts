import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  //Templating
  <div>
    //Property Binding
    <h1>Employees Record</h1>
    <ul *ngFor = " let emp of employees">
      <h2>{{emp.sno}}</h2>
      <li>{{emp.name}}</li>
      <li>{{emp.gender}}</li>
      <li>{{emp.location}}</li>
    </ul>
    //Event Binding
    <button (click) = myClick($event)> Click Me</button>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employees = [
    {sno: '1', name: 'John', gender: 'Male', location: 'USA'},
    {sno: '2', name: 'Lara' , gender: "Female", location: "NY"},
    {sno: '3', name: 'Lisa', gender: "Female", location: "NZ"}
  ];

  myClick(event){
    console.log(event);
  }
}
