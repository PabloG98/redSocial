import { Component } from '@angular/core';
import { NavController, LoadingController} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {
  //loading: Loading;
  registerCredentials = { username: '', password: '', device: '172.16.44.4' };

  constructor(private nav: NavController, private auth: AuthService, private loadingCtrl: LoadingController) { }

  public login() {
    //this.showLoading();
    // this.auth.login(this.registerCredentials).subscribe(allowed => {
    //   if (allowed.token) {
    //     this.auth.setCurrentUser(allowed);
    //     //this.nav.setRoot(HomePage);
    //   } else {
    //     this.showError("Acceso denegado. Revise sus credenciales");
    //   }
    // },
    //   error => {
    //     this.showError(error);
    //   }); 
  }

//   showLoading() {
//     this.loading = this.loadingCtrl.create({
//       content: 'Autenticando...',
//       dismissOnPageChange: true
//     });
//     this.loading.present();
//   }

  showError(text) {
    //this.loading.dismiss();

    // let alert = this.alertCtrl.create({
    //   title: 'Fail',
    //   subTitle: text,
    //   buttons: ['OK']
    // });
    // alert.present();
  }
}
