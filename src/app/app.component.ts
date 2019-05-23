import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular6-firebase-crud';
constructor(
  public home: HomeComponent,
){}

  isLoggedIn(): boolean {
    if (this.home.logout !== null) {
      return true;
    }
  }
}
