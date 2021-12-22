import { Component } from '@angular/core';
import * as firebase from 'firebase/compat';

const config = {
  apiKey: 'AIzaSyDspjoeHs8EHn7Vi-BLFWcr-7KXHHzuOSc',
  databaseURL: 'https://tf-chat-39cf0-default-rtdb.asia-southeast1.firebasedatabase.app'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.default.initializeApp(config);
  }
}
