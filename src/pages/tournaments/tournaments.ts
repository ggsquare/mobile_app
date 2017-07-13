import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';

//import do from 'rxJs';

//import service
import { MyAppService } from '../../app/shared/shared'

@Component({
  selector: 'tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

    tournaments: any;

    constructor(private nav: NavController, private myService: MyAppService) {

    }

    itemTapped($event, tourneys){
        this.nav.push(TeamsPage, tourneys);
    }


    ionViewDidLoad(){
        this.myService.getTourneys().then(data => this.tournaments = data);
    }

}
