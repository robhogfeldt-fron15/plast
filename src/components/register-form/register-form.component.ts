import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account.interface';
import { ToastController } from 'ionic-angular';
import { NavController} from 'ionic-angular';
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

  constructor( 
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private navCtrl: NavController) {
    console.log('Hello RegisterFormComponent Component');
    this.text = 'Hello World';
  }

  async register() {
   try {
     const result = await 
     this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toast.create({
       message: 'Konto skapat!',
       duration: 3000
     }).present();
     console.log(result);
     
   } catch (error) {
     console.error(error);
     this.toast.create({
       message: error.message,
       duration: 3000
     }).present();
     
   }
   
  }
}
