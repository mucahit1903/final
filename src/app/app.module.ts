import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { AdminComponent } from './components/admin/admin.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { UrunkayitComponent } from './components/urunkayit/urunkayit.component';
import { SiksorularkayitComponent } from './components/siksorularkayit/siksorularkayit.component';
import { SorularComponent } from './components/sorular/sorular.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    UrunkayitComponent,
    AnasayfaComponent,
    UrunlerComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    IletisimComponent,
    HakkimizdaComponent,
    FooterComponent,
    UyeloginComponent,
    UyeregisterComponent,
    SiksorularkayitComponent,
    SorularComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
