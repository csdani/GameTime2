import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileStatisticsComponent } from './components/profile-statistics/profile-statistics.component';
import { PlayRecordsComponent } from './components/play-records/play-records.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLoginComponent } from './components/navbar/navbar-login/navbar-login.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileStatisticsComponent,
        PlayRecordsComponent,
        NavbarComponent,
        NavbarLoginComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
