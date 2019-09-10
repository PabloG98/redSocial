import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from '../models/user';
//import { ApiResponse } from './response';
import { serverUrl } from '../config/service.config';
//import { AlertController } from 'ionic-angular';

@Injectable()
export class AuthService {
  currentUser: User;
  private headers = new Headers();
  private Url:string = serverUrl;

  constructor(
    private http: Http
    //private alertCtrl: AlertController
  ) {

  }

  public login(credentials): Observable<User>{
    if (credentials.username && credentials.password) {
      let head = new Headers();
      head.append('Content-Type', 'application/json');
      head.append('X-Application-Name', 'MOBILE');
      const encoded = btoa(JSON.stringify({ user: credentials.username, pass: credentials.password, device: credentials.device }));

    //   let options = new RequestOptions({ headers: head });
    //   return this.http.post(this.Url+'/auth-api/login', { payload: encoded }, options)
    //     .map(response => {
    //       return (response.json() as ApiResponse).data
    //     })
    return null;
    }
  }

  public errorHandler(e): void{
    //console.log(JSON.stringify(e));
  }

//   public getUserInfo(): User {
//     return this.currentUser;
//   }

//   public setCurrentUser(user: User) {
//     localStorage.setItem("CurrentUser", JSON.stringify(user));
//   }

  private clearCurrentUser(){
    localStorage.setItem("CurrentUser", "");
    this.currentUser = null;
  }

  public getCurrentUser(): Boolean|null {
    try {
      let user = JSON.parse(localStorage.getItem("CurrentUser"));
      return !!(user.token);
    } catch {
      return null;
    }
  }

//   public logout(): Observable<boolean> {
//     return Observable.create(observer => {
//       let alert = this.alertCtrl.create({
//         title: 'Salir de la aplicación',
//         subTitle: "¿Seguro que desea salir de la aplicación?",
//         buttons: [
//           {
//             text: 'Cancelar',
//             role: 'cancel',
//             handler: () => {
//               observer.next(false);
//               observer.complete();
//             }
//           },
//           {
//             text: 'Si',
//             handler: () => {
//               this.clearCurrentUser();
//               observer.next(true);
//               observer.complete();
//             }
//           }
//         ]
//       });
//       alert.present();
//     });
//   }

  private log(e) {
    //console.log(e);
  }
}
