import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { RouterModule, Routes } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortdosComponent } from './portdos/portdos.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'pictures', component: PicturesComponent},
  { path: 'body', component: BodyComponent },
  { path: 'portfolio', component: PortfolioComponent},
  
  { path: 'portdos', component: PortdosComponent},

  
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PicturesComponent,
    PortfolioComponent,
    PortdosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
