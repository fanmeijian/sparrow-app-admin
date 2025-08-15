import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logout() {
    this.keycloak.logout();
  }
  title = 'sparrow-app-admin';

  constructor(
    private keycloak: KeycloakService,
  ){}
}
