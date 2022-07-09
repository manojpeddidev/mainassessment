import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'demodevops';
  allCookies: any;
  constructor(private _http: CommonService){}
  getLatestCookies(){
   this._http.getCookies().subscribe((response) => {
     this.allCookies = response;
     console.log(this.allCookies);
   });
  
  }
  ngOnInit(): void{
   this.getLatestCookies();
 }
  // allCookies: any[] =  [ 
  //     { "name": "Chocolate Chip", "price": "$2.49", "category": "Standard" },
  //     { "name": "Sugar", "price": "$1.79", "category": "Standard" },
  //     { "name": "Snickerdoodle", "price": "$2.49", "category": "Standard" },
  //     { "name": "Oatmeal Raisin", "price": "$2.99", "category": "Standard" },
  //     { "name": "Peanut Butter", "price": "$2.99", "category": "Standard" },
  //     { "name": "White Chocolate Macadamia", "price": "$3.99", "category": "Premium" },
  //     { "name": "Red Velvet", "price": "$3.49", "category": "Premium" },
  //     { "name": "Black and White", "price": "$3.49", "category": "Premium" },
  //     { "name": "Triple Chocolate", "price": "$3.99", "category": "Premium" },
  //     { "name": "White Chocolate Coconut Divine", "price": "$5.99", "category": "Signature" },
  //     { "name": "Dark Chocolate Pistachio Sea Salt", "price": "$5.49", "category": "Signature" },
  //     { "name": "Brown Butter Bourbon Spice", "price": "$5.49", "category": "Signature" },
  //     { "name": "Bacon Chocolate Chip", "price": "$5.99", "category": "Signature" }
  //   ]
  // ;
 
  key = 'id';
  reverse: boolean = false;
  asce: boolean = true;
  
  sort(key: string){
  this.key = key;
    this.reverse = !this.reverse;
  this.asce = !this.asce;
  }

}

