import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoriaComponent } from '../pages/home/components/categoria/categoria.component';
import { GrillaCategoriasComponent } from '../pages/home/components/grilla-categorias/grilla.categorias.component'
import { HeadSliderComponent } from '../pages/home/components/head-slider/head.slider.component';
import { CategoriaService } from '../pages/home/components/categoria/categoria.service'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EvenOddPipe } from '../pages/home/pipes/evenodd.pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoriaComponent,
    GrillaCategoriasComponent,
    HeadSliderComponent,
    EvenOddPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
