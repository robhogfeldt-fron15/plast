import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/account.interface';
import { LoginResponse } from '../../models/login-response.interface';
import { ToastController } from 'ionic-angular';
import { NavController} from 'ionic-angular';
import { AuthService } from '../../providers/auth';
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  text: string;
  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>

  constructor( 
    private toast: ToastController,
    private navCtrl: NavController,
    private auth: AuthService) {
    
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
   try {
     const result = await 
     this.auth.register(this.account);
     this.registerStatus.emit(result);
     
   } catch (e) {
     console.error(e);
     this.registerStatus.emit(e);   
   }
   
  }
}
