import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { NewEmployedComponent } from './auth/new-employed/new-employed.component';
import { environment } from 'src/environments/environment';
import { NgxEchartsModule } from 'ngx-echarts';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent, 
    AuthComponent, 
    HomeComponent,
    NewEmployedComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    PagesModule,
    ComponentsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => ('echarts')
    }),
    
    
  ],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp( () => initializeApp( environment.firebaseConfig )),
    // provideFirebaseApp(() =>
    //   initializeApp({
    //     projectId: 'novacoders-b3936',
    //     appId: '1:456963770694:web:8068982be09245cd803d47',
    //     storageBucket: 'novacoders-b3936.firebasestorage.app',
    //     apiKey: 'AIzaSyDFk5NE2wkJ1FyU3MsMJ-9nSYN-10liRTU',
    //     authDomain: 'novacoders-b3936.firebaseapp.com',
    //     messagingSenderId: '456963770694',
    //   })
    // ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
