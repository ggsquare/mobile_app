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

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }

}
