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
  
  constructor(private http: Http) {}

  ngOnInit() {
  // this.getToken();
  this.getTopAlbum();
  this.getSingleAlbum();
  this.getFeaturedAlbum();
  }

  
  getTopAlbum() {
    return this.http.get('http://127.0.0.1:8000/top-albums/us')
  .toPromise()
  .then(response => {
    this.top = response.json();
    }
    )
  .catch(this.handleError);
  }
  
  getSingleAlbum() {
    return this.http.get('http://127.0.0.1:8000/top-singles/us')
  .toPromise()
  .then(response => {
    this.single = response.json();
    console.log(response.json());
    }
    )
  .catch(this.handleError);
  }
  
  
  getFeaturedAlbum() {
    return this.http.get('http://127.0.0.1:8000/featured-artist/us')
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
    console.log("hello");
    return this.http.post('http://127.0.0.1:8000/oauth/v2/token',
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
    console.log(response.json());}
    )
  .catch(this.handleError);
  }

}
