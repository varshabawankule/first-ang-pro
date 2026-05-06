import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heading= '10 EXAMPLE';
  color1= 'red';
  color2= 'pink';
  color3= 'orange';
  firstname:string= 'JAVASCRIPT'
n1:number=2;
n2:number=3;
  name= 'Rahul';
  fname="Jhon";
lname= "Doe";
  title = 'hello Angular';
  userName:string= `I am Jhon`;
  userId:number= 1234567;
  index: number=9;
  select: boolean=true;
  email: string='md@gmail.com';
  skill: string="Javascript";
  skills:Array<string>=['Html', 'Css', 'JS', 'TS'];
  fruits:Array<string>= ["Apple","Banana", "Mango", "Orange"];
  colors:Array<string>=['red', 'yellow', 'orange'];
  ids: Array<number>= [1, 2, 3, 4];
  vegetables:Array<string> = ['Potato','Tomato', 'Onion', 'Cabbage'];
animals:Array<string> = ['Dog', 'Cat', 'Lion', 'Tiger', 'Elephant'];
countries:Array<string> = ['India', 'USA', 'Canada', 'Australia', 'Germany'];
}
