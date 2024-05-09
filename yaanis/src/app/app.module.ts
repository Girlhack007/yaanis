import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import{ AngularFireAuthModule }from '@angular/fire/compat/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule,AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig) ,provideFirebaseApp(() => initializeApp({"projectId":"yaanis-93fc7","appId":"1:314595723559:web:76dbe995858bd8aec40102","storageBucket":"yaanis-93fc7.appspot.com","apiKey":"AIzaSyDjiof9rdSgYHDXUlc00xgoJJQ9q5-VSHM","authDomain":"yaanis-93fc7.firebaseapp.com","messagingSenderId":"314595723559"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
