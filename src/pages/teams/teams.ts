import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamHomePage } from '../pages';

@Component({
    selector: 'teams',
    templateUrl: 'teams.html'
})

export class TeamsPage {
    constructor(private nav: NavController){

    }

    teams = [
        { id: 1, name: 'Byte Me', imagePath: '../../assets/images/byte.jpg'},
        { id: 2, name: 'Cavs', imagePath: '../../assets/images/cavs.jpg'},
        { id: 3, name: 'Red Sox', imagePath: '../../assets/images/sox.png'}
    ];

    itemTapped($event, team){
        this.nav.push(TeamHomePage, team);
    }
}