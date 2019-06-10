import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { GymClassesComponent } from './components/gym-classes/gym-classes.component';
import { FactsComponent } from './components/facts/facts.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GiveFeedbackComponent } from './components/give-feedback/give-feedback.component';
import { GymClassCardComponent } from './components/gym-class-card/gym-class-card.component';
import { environment } from 'src/environments/environment';
import { FactCardComponent } from './fact-card/fact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    GymClassesComponent,
    FactsComponent,
    ScheduleComponent,
    FeedbackComponent,
    GiveFeedbackComponent,
    GymClassCardComponent,
    FactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
