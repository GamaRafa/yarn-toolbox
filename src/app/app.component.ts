import { Component, OnInit, inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  title: string = 'Home'
  
  appPages = [
    {
      title: 'Home',
      path: 'home'
    },
    {
      title: 'Yarn Stash',
      path: 'yarn-stash'
    },
    {
      title: 'Contador de carreiras',
      path: 'row-counter'
    },
    {
      title: 'Contador de repetições',
      path: 'rep-counter'
    },
    {
      title: 'Calculadora de aumentos',
      path: 'increase-calculator'
    },
    {
      title: 'Calculadora de diminuições',
      path: 'decrease-calculator'
    },
  ]
  constructor() {}

  ngOnInit() {
  }

}
