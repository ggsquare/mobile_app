import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamsPage, TournamentsPage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }

  toTeams(){
    this.nav.push(TeamsPage);
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }

}
