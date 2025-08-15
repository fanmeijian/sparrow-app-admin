import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuRoutingModule } from './menu/menu-routing.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTreeModule } from '@angular/material/tree';
import { TREE_SERVICE } from './sortable-tree/dynamic-data-source';
import { MenuService } from './service/menu.service';
import { SortableTreeComponent } from './sortable-tree/sortable-tree.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


export const BASE_PATH: InjectionToken<string> = new InjectionToken('apiBase')


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloak.authServerUrl,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'login-required',
      },
      bearerExcludedUrls: ['/assets'],
    }).then(async res => {
      const profile: any = await keycloak.loadUserProfile();
      sessionStorage.setItem('username', profile.username || profile.id);
    });
}

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    SortableTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    DragDropModule,

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    { provide: TREE_SERVICE, useClass: MenuService },
    { provide: BASE_PATH, useValue: environment.apiBase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
