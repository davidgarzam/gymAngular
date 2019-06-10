import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gymAngular';

  // gymClasses: any[];

  // constructor(db: AngularFireDatabase){
  //   db.list('/gymClasses')
  //   .valueChanges()
  //   .subscribe(gymClasses=>{
  //     this.gymClasses = gymClasses;
  //     console.log(this.gymClasses);
  //   });
  // }
}
