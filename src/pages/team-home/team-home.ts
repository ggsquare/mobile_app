import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamDetailPage, StandingsPage, HomePage } from '../pages';

@Component({
  selector: 'team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

    teamDetailTab = TeamDetailPage;
    standingsTab = StandingsPage;

    team: any; 

    constructor(private nav: NavController, private navParams: NavParams) {
        this.team = this.navParams.data;
    }

}
