import { Component, OnInit, Input } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-gym-class-card',
  templateUrl: './gym-class-card.component.html',
  styleUrls: ['./gym-class-card.component.scss']
})
export class GymClassCardComponent implements OnInit {

  // gymClasses: any[];
  // shownClasses: number = 10;

  @Input() yellowStars : number;
  @Input() starColor: string = 'stars__yellow';

  @Input() gymClass : any[];


  // constructor(db: AngularFireDatabase){
  //   db.list('/gymClasses', ref=>ref.limitToFirst(this.shownClasses))
  //   .valueChanges()
  //   .subscribe(gymClasses=>{
  //     this.gymClasses = gymClasses;
  //     console.log(this.gymClasses);
  //   });
  // }

  ngOnInit() {
    this.setStarColor();
  }

 printStars : any[] =new Array(5);
  setStarColor(){
    
    for (let index = 0; index < 5; index++) {
      if(index < this.yellowStars){
        this.printStars[index]= "stars__yellow";
      }else{
        this.printStars[index]= "stars__grey";
      }
      
    }    
  }
 
}
