import { Component, OnDestroy } from '@angular/core';
import { Profile } from '../../models/profile.interface';
import { User } from 'firebase/app';
import { Subscription } from 'rxjs/Subscription';
import { AuthService} from '../../providers/auth';
import { DataService} from '../../providers/data';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {
  
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;
  constructor(private data: DataService, private auth: AuthService) {
   this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {

   })
  }

  async saveProfile() {
    if(this.authenticatedUser){
       this.profile.email = this.authenticatedUser.email;
       const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
       console.log(result);
       
    }
   
  }

}
