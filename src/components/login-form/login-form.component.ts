import { Component, EventEmitter, Output } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account.interface';
import { LoginResponse } from '../../models/login-response.interface';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;
  account = {} as Account;
  @Output()loginStatus: EventEmitter<LoginResponse>

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.loginStatus = new EventEmitter<any>();
  }
  async login() {
    try {
      const result: LoginResponse = await
      this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      this.loginStatus.emit(result);
    } catch (e) {
      console.log(e);  
      const error: LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
    }
  }
  
  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

}
