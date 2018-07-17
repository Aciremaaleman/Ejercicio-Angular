import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  public url: string;
  public data;

    constructor( public http: Http) {
        this.url = 'http://node-hnapi.herokuapp.com/news';
    }
    getNews (): Observable<any> {
        this.data =  this.http.get(this.url).map(response => response.json());
        return this.data;
    }

}
