import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account} from '../models/account.interface';
import { LoginResponse } from '../models/login-response.interface';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) {}

  getAuthenticatedUser(){
    return this.auth.authState;
  }

  async signIn(account: Account){
    try {
      return <LoginResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
      return <LoginResponse> {
        error: e
      }; 
    }
  }

  async register(account: Account){
    try {
      return <LoginResponse> {
       result: await 
       this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
     
    } catch (e) {
      return <LoginResponse> {
        error: e
      }
    }
  }

}
