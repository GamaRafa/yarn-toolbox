import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputChangeEventDetail, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-decrease-calculator',
  templateUrl: './decrease-calculator.component.html',
  styleUrls: ['./decrease-calculator.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class DecreaseCalculatorComponent  implements OnInit {

  current: number
  decreases: number
  frequency: number
  remainder: number
  remainderDistributed: number

  constructor() {
    console.log(`decreases: ${this.decreases}`)
   }

  ngOnInit(
  ) {}

  showValues(){
    console.log(`current: ${this.current}`)
    console.log(`decreaes: ${this.decreases}`)
  }

}
