import { Router } from '@angular/router';
import { Injectable,Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {APP_CONFIG} from '../config/app.config';
import {IAppConfig} from '../config/iapp.config';

@Injectable()
export class HomepageService {

	private single;
  private top;
  private featured;
  private token ='test';
  private headers = new Headers({'Authorization': 'Bearer ' + this.token});

  constructor(private router: Router,private http: Http,@Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getTopAlbum() {
    return this.http.get(this.appConfig.apiUrl+'/top-albums/us', {headers: this.headers})
  .toPromise()
  .then(response => {
    this.top = response.json();
    }
    )
  .catch(this.handleError);
  }
  
  getSingleAlbum() {
    return this.http.get(this.appConfig.apiUrl+'/top-singles/us',{headers: this.headers})
  .toPromise()
  .then(response => {
    this.single = response.json();
    }
    )
  .catch(this.handleError);
  }
  
  
  getFeaturedAlbum() {
    return this.http.get(this.appConfig.apiUrl+'/featured-artist/us',{headers: this.headers})
  .toPromise()
  .then(response => {
    this.featured = response.json();
    }
    )
  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
