import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-row-counter',
  templateUrl: './row-counter.component.html',
  styleUrls: ['./row-counter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class RowCounterComponent  implements OnInit {

  projectName: string = 'Nome do projeto'
  rowNumber: number = 0 //vai começar em zero

  constructor() { }

  ngOnInit() {} // usar onInit pra buscar as informações de cada projeto

  minus(): void {
    this.rowNumber -= 1
    if (this.rowNumber < 0){
      this.rowNumber = 0
    }
  }

  plus(): void {
    this.rowNumber += 1
  }

}
