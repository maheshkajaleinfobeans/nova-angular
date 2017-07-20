import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private token;
  
  constructor(private router: Router,private http: Http) {}

  
  getToken() {
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
    }
    )
  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

  isAuthenticated() {
    return this.token != null;
  }
}
