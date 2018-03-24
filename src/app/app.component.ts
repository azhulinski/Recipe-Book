import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDUNKLRs1M9-SoD7wmSMNQrMH2i2GHPT-s',
      authDomain: 'ng-recipe-book-9fc5f.firebaseapp.com',
      // databaseURL: 'https://ng-recipe-book-9fc5f.firebaseio.com',
      // projectId: 'ng-recipe-book-9fc5f',
      // storageBucket: 'ng-recipe-book-9fc5f.appspot.com',
      // messagingSenderId: '1041144890853'
    });
  }

}
