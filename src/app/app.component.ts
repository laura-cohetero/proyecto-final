import { Component, NgModule } from '@angular/core';
import { AuthService} from './core/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})


export class AppComponent {
  title = 'angular6-firebase-crud';
constructor(
  public authService: AuthService,
  private router: Router,
 
  
){
 // this.authService.isLoggedIn();
}
logout(){
  this.authService.doLogout()
  .then((res) => {
    //this.location.back();
    this.router.navigate(['/login']);
  }, (error) => {
    console.log("Logout error", error);
  });
}

/*
  isLoggedIn(): boolean {
    if (this.home.logout !== null) {
      return true;
    }
  }*/

}