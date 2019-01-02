import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';


import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import * as lozad from 'lozad';


import { TitleComponent } from './top/title/title.component';
import { DeepBlueComponent } from './services/deep-blue/deep-blue.component';
import { QuoteComponent } from './quote/quote.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProjectsComponent,
    FooterComponent,
    ServicesComponent,
    TitleComponent,
    DeepBlueComponent,
    QuoteComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
