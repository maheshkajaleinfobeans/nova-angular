import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'httprequest-root',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
@Injectable()
export class HttprequestComponent implements OnInit{

  private single;
  private top;
  private featured;
  private token;
  private apiUrl = 'http://127.0.0.1:8001/';
  constructor(private http: Http) {}

  ngOnInit() {
    this.getToken();
  }

  
  getTopAlbum(token) {
    const headers = new Headers({'Authorization': 'Bearer ' +token});
    return this.http.get(this.apiUrl+'top-albums/us',{headers: headers})
    .toPromise()
    .then(response => {
      this.top = response.json();
    }
    )
    .catch(this.handleError);
  }
  
  getSingleAlbum(token) {
    const headers = new Headers({'Authorization': 'Bearer ' +token});
    return this.http.get(this.apiUrl+'top-singles/us',{headers: headers})
    .toPromise()
    .then(response => {
      this.single = response.json();
    }
    )
    .catch(this.handleError);
  }
  
  
  getFeaturedAlbum(token) {
    const headers = new Headers({'Authorization': 'Bearer ' +token});
    return this.http.get(this.apiUrl+'featured-artist/us',{headers: headers})
    .toPromise()
    .then(response => {
      this.featured = response.json();
    }
    )
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getToken() {
    return this.http.post(this.apiUrl+'oauth/v2/token',
    {
      grant_type: 'password',
      client_id: '1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4',
      client_secret: '4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k',
      username: 'admin',
      password: 'admin'
    },
    )
    .toPromise()
    .then(response => {
      this.token = response.json();
      this.getTopAlbum(this.token.access_token);
      this.getSingleAlbum(this.token.access_token);
      // this.getFeaturedAlbum(this.token.access_token);
    }
    )
    .catch(this.handleError);
  }

}
