import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { LogoArgProgComponent } from './componente/logo-arg-prog/logo-arg-prog.component';
import { BannerComponent } from './componente/banner/banner.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componente/experiencia/experiencia.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftComponent } from './componente/hard-soft/hard-soft.component';
import { ProyectoComponent } from './componente/proyecto/proyecto.component';
import { FooterComponent } from './componente/footer/footer.component';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componente/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }