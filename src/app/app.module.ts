import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//import native perso 
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { PostProviders } from '../providers/post-providers';

//import page 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ForumPage } from '../pages/forum/forum';
import { InscriptPage } from '../pages/inscript/inscript';
import { LoginPage } from '../pages/login/login';
import { RchpharmPage } from '../pages/rchpharm/rchpharm';
import { PharmainscripPage } from '../pages/pharmainscrip/pharmainscrip';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ForumPage,
    InscriptPage,
    LoginPage,
    RchpharmPage,
    PharmainscripPage,
    ForumPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ForumPage,
    InscriptPage,
    LoginPage,
    RchpharmPage,
    TabsPage,
    PharmainscripPage,
    ForumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostProviders,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
