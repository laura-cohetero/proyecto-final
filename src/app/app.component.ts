import { Component, NgModule } from '@angular/core';
import { AuthService} from './core/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})


export class AppComponent {
  title = 'angular6-firebase-crud';
constructor(
  public authService: AuthService,
  
){
  this.authService.isLoggedIn();
}
ngOnInit() {
 
}

/*
  isLoggedIn(): boolean {
    if (this.home.logout !== null) {
      return true;
    }
  }*/

}
