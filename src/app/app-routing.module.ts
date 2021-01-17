import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { AdminComponent } from './components/admin/admin.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { UrunkayitComponent } from './components/urunkayit/urunkayit.component';
import { SorularComponent } from './components/sorular/sorular.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';




const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: '',
    component:
      AnasayfaComponent,

  }
  ,
  { path: 'login', component: LoginComponent },
  { path: 'urunkayit', component: UrunkayitComponent },
  { path: 'hakkimizda', component: HakkimizdaComponent },
  { path: 'iletisim', component: IletisimComponent },

  { path: 'urunler', component: UrunlerComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }},
  { path: 'sorular', component: SorularComponent },
  { path: 'uyegiris', component: UyeloginComponent },
  { path: 'uyeol', component: UyeregisterComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
