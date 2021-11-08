import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MinProfilComponent } from './min-profil/min-profil.component';
import { VadAngularArComponent } from './vad-angular-ar/vad-angular-ar.component';
import { SPAsComponent } from './spas/spas.component';
import { ArtitekturAngularComponent } from './artitektur-angular/artitektur-angular.component';
import { VadTypescriptArComponent } from './vad-typescript-ar/vad-typescript-ar.component';
import { SpaVsMultiComponent } from './spa-vs-multi/spa-vs-multi.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
