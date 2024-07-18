import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from 'src/Pages/home/home.component';
import { NavBarComponent } from 'src/Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent,NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
