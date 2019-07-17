import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  resultat:string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    //this.initChiffrement();
  }


  initChiffrement() {

    this.auth.chiffrementService().subscribe(
      data => {
        console.log("PATCH Request is successful ", data);
        this.resultat = data.toString();
      },

      error => {
        console.log("Error", error);
      }
    );

  }


}
