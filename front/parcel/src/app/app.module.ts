import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnviarComponent } from './enviar/enviar.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { RastrearComponent } from './rastrear/rastrear.component';
import { HistorialComponent } from './historial/historial.component';
import { ProblemasComponent } from './problemas/problemas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SideMenuComponent,
    DashboardComponent,
    EnviarComponent,
    CotizarComponent,
    RastrearComponent,
    HistorialComponent,
    ProblemasComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
