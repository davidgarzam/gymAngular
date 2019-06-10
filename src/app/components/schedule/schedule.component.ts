import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  gymSchedule: any[];
  week:string;

    constructor(db: AngularFireDatabase){
    db.list('/gymSchedule/2019-W20/', ref=>ref)
    //db.list('/gymSchedule/2019-W20/'+ this.day, ref=>ref)
    .valueChanges()
    .subscribe(gymSchedule=>{
      this.gymSchedule = gymSchedule;
      //console.log(this.gymSchedule[0][0].nameOfClass);
      //console.log(this.gymSchedule[0].nameOfClass);
    });
  }

  ngOnInit() {
  }

  selectWeek(){
    console.log(this.week);
  }

}
