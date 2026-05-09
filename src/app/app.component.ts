

import { Component, OnInit } from '@angular/core';
import { postsData } from './consts/posts';
import { Ipost } from './models/posts';
import { stdArr } from './consts/student';
import { countries } from './consts/country';
import { rivers } from './consts/river';
import { hospitals } from './consts/hospital';
import { doctors } from './consts/doctor';
import { employees } from './consts/employee';
import { products } from './consts/product';
import { books } from './consts/books';
import { movies } from './consts/movies';
import { mobiles } from './consts/mobile';
import { cars } from './consts/cars';
import { courses } from './consts/courses';
import { colleges } from './consts/colleges';
import { teachers } from './consts/teacher';
import { cities } from './consts/city';
import { schools } from './consts/school';
import { flights } from './consts/flights';
import { restaurants } from './consts/resta';
import { banks } from './consts/bank';
import { laptops } from './consts/laptop';
import { universities } from './consts/univercity';
import { buses } from './consts/bus';
import { gyms } from './consts/gym';
import { cricketPlayers } from './consts/player';
import { companies } from './consts/company';
import { animals } from './consts/animal';
import { festivals } from './consts/festival';
import { footballTeams } from './consts/team';
import { planets } from './consts/planet';
import { trains } from './consts/train';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

doctor=doctors
hospital=hospitals
rive=rivers
  postsArr : Array<Ipost> = postsData
 stdsArr=stdArr
 country=countries
 employee=employees
 product=products
 book=books
 movie=movies
 mob=mobiles
 car=cars
course=courses
college=colleges
teacher=teachers
city=cities
school=schools
flight=flights
resta=restaurants
bank=banks
laptop=laptops
univercity=universities
bus=buses
gym=gyms
player=cricketPlayers
company=companies
animal=animals
festival=festivals
team=footballTeams
planet=planets
train=trains

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
