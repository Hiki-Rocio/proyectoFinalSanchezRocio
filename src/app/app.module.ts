import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { LogoArgProgComponent } from './componente/logo-arg-prog/logo-arg-prog.component';
import { RedesComponent } from './componente/redes/redes.component';
import { BannerComponent } from './componente/banner/banner.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    RedesComponent,
    BannerComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
