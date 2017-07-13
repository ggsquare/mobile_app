import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { MyAppService } from './shared/shared';

import { MyApp } from './app.component';

import { TeamDetailPage, TeamsPage, DetailPage, 
        ListPage, HomePage, StandingsPage, TeamHomePage, TournamentsPage} from '../pages/pages';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage, 
    TeamHomePage,
    TournamentsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage,
    TournamentsPage
  ],
  providers: [
    MyAppService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
