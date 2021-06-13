import { NgmaterialModule } from './/ngmaterial/ngmaterial.module';
import { NestHttpModule } from './nest-http/nest-http.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NestHttpComponent } from './nest-http/nest-http.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteGuardComponent } from './route-guard/route-guard.component';
import { TestpipePipe } from './testpipe.pipe';
import { AnimationComponent } from './animation/animation.component';
import { NgContentComponent } from './ng-content/ng-content.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroFormComponent,
    NestHttpComponent,
    RouteGuardComponent,
    TestpipePipe,
    AnimationComponent,
    NgContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgmaterialModule,
    // NestHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
