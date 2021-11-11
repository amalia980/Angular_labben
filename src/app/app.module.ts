import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';//new change

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MinProfilComponent } from './min-profil/min-profil.component';
import { VadAngularArComponent } from './vad-angular-ar/vad-angular-ar.component';
import { SPAsComponent } from './spas/spas.component';
import { ArtitekturAngularComponent } from './artitektur-angular/artitektur-angular.component';
import { VadTypescriptArComponent } from './vad-typescript-ar/vad-typescript-ar.component';
import { SpaVsMultiComponent } from './spa-vs-multi/spa-vs-multi.component';
//import { RouterModule } from '@angular/router';

//new change
const routes: Routes = [
  {path: 'min-profil', component: MinProfilComponent},
  {path: 'angular', component: VadAngularArComponent},
  {path: 'spa', component: SPAsComponent},
  {path: 'ang-arki', component: ArtitekturAngularComponent},
  {path: 'typescript', component: VadTypescriptArComponent},
  {path: 'spaVsmulti', component: SpaVsMultiComponent},
  {path: '', redirectTo: '/min-profil', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MinProfilComponent,
    VadAngularArComponent,
    SPAsComponent,
    ArtitekturAngularComponent,
    VadTypescriptArComponent,
    SpaVsMultiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)//new change
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
