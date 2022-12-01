import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { EnviarComponent } from '../enviar/enviar.component';
import { CotizarComponent } from '../cotizar/cotizar.component';
import { RastrearComponent } from '../rastrear/rastrear.component';
import { HistorialComponent } from '../historial/historial.component';
import { ProblemasComponent } from '../problemas/problemas.component';
import { UsuarioComponent } from '../usuario/usuario.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo:'enviar', pathMatch:'full'  },
    { path: 'enviar', component: EnviarComponent },
    { path: 'cotizar', component: CotizarComponent },
    { path: 'rastrear', component: RastrearComponent },
    { path: 'historial', component: HistorialComponent },
    { path: 'problemas', component: ProblemasComponent },
    { path: 'usuario', component: UsuarioComponent },
  ] },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
