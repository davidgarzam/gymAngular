import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-gym-classes',
  templateUrl: './gym-classes.component.html',
  styleUrls: ['./gym-classes.component.scss']
})
export class GymClassesComponent implements OnInit {

  gymClasses: any[];

  shownClasses: number = 0;
  totalClasses: number;
  viewMore: boolean =true;

  constructor(private db: AngularFireDatabase){
    db.list('/gymClasses', ref=>ref)
    .valueChanges()
    .subscribe(gymClassesLenght=>{
      this.totalClasses= gymClassesLenght.length;
      //console.log(this.totalClasses);
    });
  }

  ngOnInit() {
    this.showmore();
  }

  showmore(){
    this.shownClasses +=3;
    this.db.list('/gymClasses', ref=>ref.limitToFirst(this.shownClasses))
    .valueChanges()
    .subscribe(gymClasses=>{
      this.gymClasses = gymClasses;
      //console.log(this.gymClasses);
      
    });
    if(this.totalClasses<this.shownClasses){
      this.viewMore=false;
    }
    else{
      this.viewMore=true;
    }
  }

  showless(){
    this.shownClasses -=3;
    this.db.list('/gymClasses', ref=>ref.limitToFirst(this.shownClasses))
    .valueChanges()
    .subscribe(gymClasses=>{
      this.gymClasses = gymClasses;
      //console.log(this.gymClasses);
    });  
    if(this.totalClasses<this.shownClasses){
      this.viewMore=false;
    }
    else{
      this.viewMore=true;
    }
  }

  sortBy(){
    console.log("holsss");
  }

}
