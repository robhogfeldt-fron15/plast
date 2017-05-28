import { Component, EventEmitter, Output } from '@angular/core';
import { NavController} from 'ionic-angular';

import { Account } from '../../models/account.interface';
import { LoginResponse } from '../../models/login-response.interface';
import { ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;
  account = {} as Account;
  @Output()loginStatus: EventEmitter<LoginResponse>

  constructor(
    private navCtrl: NavController, 
    private auth: AuthService) {
    this.loginStatus = new EventEmitter<any>();
  }

  async login() {
    const loginResponse = await this.auth.signIn(this.account)
    this.loginStatus.emit(loginResponse);
  }
  
  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

}
