import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  gymFacts: any[];

  constructor(private db: AngularFireDatabase){
    db.list('/gymFacts', ref=>ref.limitToFirst(4))
    .valueChanges()
    .subscribe(gymFacts=>{
      this.gymFacts = gymFacts;
      //console.log(gymFacts);
    });
  }

  ngOnInit() {
  }

}
