import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public appPages = [
  //   { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  // ];

  public appPages = [
    { title: 'Home', url: '/folder/home'},
    { title: 'Yarn Stash', url: '/folder/yarn-stash'},
    { title: 'Contador de carreiras', url: '/folder/row-counter'},
    { title: 'Contador de repetições', url: '/folder/rep-counter'},
    { title: 'Calculadora de aumentos', url: '/folder/increase-calculator'},
    { title: 'Calculadora de diminuições', url: '/folder/decrease-calculator'},

  ]
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
