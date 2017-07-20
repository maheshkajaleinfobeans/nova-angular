import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomepageService {

	private single;
  private top;
  private featured;
  private token ='test';
  private headers = new Headers({'Authorization': 'Bearer ' + this.token});
  private apiUrl = 'http://127.0.0.1:8000';
  constructor(private router: Router,private http: Http) { }

  getTopAlbum() {
    return this.http.get(this.apiUrl+'/top-albums/us', {headers: this.headers})
  .toPromise()
  .then(response => {
    this.top = response.json();
    }
    )
  .catch(this.handleError);
  }
  
  getSingleAlbum() {
    return this.http.get(this.apiUrl+'/top-singles/us',{headers: this.headers})
  .toPromise()
  .then(response => {
    this.single = response.json();
    }
    )
  .catch(this.handleError);
  }
  
  
  getFeaturedAlbum() {
    return this.http.get(this.apiUrl+'/featured-artist/us',{headers: this.headers})
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
