import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-rep-counter',
  templateUrl: './rep-counter.component.html',
  styleUrls: ['./rep-counter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES
  ]
})
export class RepCounterComponent  implements OnInit {

  projectName: string = 'Nome do projeto'
  rowNumber: number = 1
  repeatNumber: number = 1
  rowsPerRepeat: number = 6   // vai ser setado pela configuração de cada projeto
  currentValue: number;

  constructor() { }

  ngOnInit() {
    this.currentValue = 0
  } // usar onInit pra buscar as informações de cada projeto

  public incrementProgress() {
    this.currentValue += 1;
    if (this.currentValue > this.rowsPerRepeat) {
        this.currentValue = this.rowsPerRepeat;
    }
}

public decrementProgress() {
    this.currentValue -= 1;
    if (this.currentValue < 1) {
        this.currentValue = 1;
    }
}

  minus(): void {
    this.rowNumber -= 1
    if (this.rowNumber < 1){
      this.decreaseRepeat()
    }
  }

  plus(): void {
    this.rowNumber += 1
    if (this.rowNumber > this.rowsPerRepeat){
      this.increaseRepeat()
    }
  }

  increaseRepeat(): void {
    this.repeatNumber += 1
    this.rowNumber = 1
  }

  decreaseRepeat(): void {
    this.repeatNumber -= 1
    this.rowNumber = this.rowsPerRepeat
    if (this.repeatNumber < 1){
      this.repeatNumber = 1
      this.rowNumber = 1
    }
  }

}
