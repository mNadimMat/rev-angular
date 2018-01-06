import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {LOGIN_URL} from '../app.module';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  public login(user:any){

    return this.http.get(LOGIN_URL+user.login+'/'+user.password);

  }


}
