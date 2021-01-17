import { Component, OnInit } from '@angular/core';
import { FbservisService2 } from './../../services/fbServis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public fbServis: FbservisService2,
    public router: Router
  ) { }

  ngOnInit() {

  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
}
