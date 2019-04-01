import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InstaSure';

  isLoggedIn;
  constructor() {
    if (localStorage.getItem('accessToken')) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }
}
