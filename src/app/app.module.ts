import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//INCLUIR
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MinavbarComponent } from './minavbar/minavbar.component'// acá Http

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    RegistroComponent,
    LoginComponent,
    DetalleComponent,
    FooterComponent,
    MinavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//aca http
    FormsModule, ReactiveFormsModule //INCLUIR
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
