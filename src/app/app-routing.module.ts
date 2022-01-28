import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { GeneroComponent } from './genero/genero.component';
import { InicioComponent } from './inicio/inicio.component';
import { InsertarComponent } from './insertar/insertar.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'genero',component: GeneroComponent},
  {path: 'insertar', component:InsertarComponent},
  {path: 'sobre', component:SobreComponent}
  
];

@NgModule({
  declarations: [
    InicioComponent,
    GeneroComponent,
    InsertarComponent,
    SobreComponent
  ],
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
