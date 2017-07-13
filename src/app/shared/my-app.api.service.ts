import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class MyAppService {
    private baseUrl = 'https://myapp-dbd8e.firebaseio.com';

    constructor(private http: Http){

    }

    getTourneys(){
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
            .subscribe(res => resolve(res.json()));
        })
    }
}