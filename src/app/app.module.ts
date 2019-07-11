import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { NavBarreComponent } from './Layout/nav-barre/nav-barre.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarreComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
