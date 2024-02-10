import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-decrease-calculator',
  templateUrl: './decrease-calculator.component.html',
  styleUrls: ['./decrease-calculator.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
export class DecreaseCalculatorComponent  implements OnInit {

  decreaseForm: FormGroup

  current: number
  decreases: number
  frequency: number
  remainder: number
  remainderDistributed: number
  instructions: string = ''

  constructor() {
  }

  ngOnInit() {
    this.decreaseForm = new FormGroup({
      'current': new FormControl('', [Validators.required]),
      'decreases': new FormControl('', [Validators.required])
    })
  }

  calculateDecreases() {
    this.current = this.decreaseForm.get('current')?.value
    this.decreases = this.decreaseForm.get('decreases')?.value
    this.frequency = Math.floor(this.current / this.decreases)
    this.remainder = this.current % this.decreases

    if (this.remainder % 2 == 0){
      this.remainderDistributed = this.remainder / 2
      this.instructions = `Trabalhe os ${this.remainderDistributed} primeiros pontos, *k${this.frequency - 2}, k2tog* ${this.decreases} vezes. Trabalhe os ${this.remainderDistributed} pontos restantes.`
    } else {
      this.remainderDistributed = Math.floor(this.remainder / 2)
      this.instructions = `Trabalhe os ${this.remainderDistributed} primeiros pontos, *k${this.frequency - 2}, k2tog* ${this.decreases} vezes. Trabalhe os ${this.remainderDistributed + 1} pontos restantes.`
    }
  }
}
