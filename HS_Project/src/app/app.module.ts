import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { TooltipModule } from 'primeng/tooltip';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoTooltipComponent } from './info-tooltip/info-tooltip.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { GalleriaWallComponent } from './galleria-wall/galleria-wall.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    TooltipModule,
    GalleriaModule,
    ButtonModule
  ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, InfoTooltipComponent, GalleriaComponent, GalleriaWallComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
