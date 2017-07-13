import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../pages';

@Component({
    selector: 'team-detail',
    templateUrl: 'team-detail.html'
})

export class TeamDetailPage {

    team: any;

    constructor(private nav: NavController, private navParams: NavParams){
        this.team = this.navParams.data;
        console.log('**nav params: ', this.navParams);
    }

    goHome(){
        //this.nav.push(HomePage) //still has back button here
        //this.nav.popToRoot(); //doesnt work because dif nav stack than root nav stack
        //console.log('**parent: ', this.nav.parent);
        //this.nav.parent.popToRoot();
    }
}