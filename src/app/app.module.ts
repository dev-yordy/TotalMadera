import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListadeclientesComponent } from './listadeclientes/listadeclientes.component';
import { HomeComponent } from './home/home.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AgregarclientesComponent } from './agregarclientes/agregarclientes.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { MensajeService } from './Services/mensaje.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    ListadeclientesComponent,
    HomeComponent,
    AgregarclientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AngularFireStorageModule,
    ProgressbarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore,
    MensajeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
