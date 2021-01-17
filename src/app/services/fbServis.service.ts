import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { Uye } from './../models/uye';


@Injectable({
  providedIn: 'root'
})
export class FbServisService {

  private dbKayit = '/sorular';

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    ;
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }




}
@Injectable({
  providedIn: 'root'
})
export class FbServisService1 {

  private dbKayit = '/urunler';
  kayitRef: AngularFireList<Kayit> = null;

  constructor(
    public db: AngularFireDatabase
  ) {
    this.kayitRef = db.list(this.dbKayit);
  }


  KayitListele() {
    return this.kayitRef;
  }


  KayitEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit);
  }
  KayitDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }



}


@Injectable({
  providedIn: 'root'
})
export class FbservisService2 {

  private dbUye = '/Uyeler';
  kayitRef: AngularFireList<Kayit> = null;
  uyeRef: AngularFireList<Uye> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {

    this.uyeRef = db.list(this.dbUye);
  }
  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }








}

@Injectable({
  providedIn: 'root'
})
export class FbServisService3 {

  private dbKayit = '/sorular';
  kayitRef: AngularFireList<Kayit> = null;

  constructor(
    public db: AngularFireDatabase
  ) {
    this.kayitRef = db.list(this.dbKayit);
  }

  KayitListele() {
    return this.kayitRef;
  }

  KayitEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit);
  }
  KayitDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }


}
