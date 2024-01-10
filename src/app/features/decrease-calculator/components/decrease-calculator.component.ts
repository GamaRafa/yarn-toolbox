import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-decrease-calculator',
  templateUrl: './decrease-calculator.component.html',
  styleUrls: ['./decrease-calculator.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class DecreaseCalculatorComponent  implements OnInit {

  current: number
  decreases: number
  frequency: number
  remainder: number
  remainderDistributed: number
  instructions: string = ''

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(`decreases: ${this.decreases}`)
   }

  ngOnInit() {
    this.removeInputHighlight()
  }
  calculateDecreases() {
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
  removeInputHighlight() {
    const inputElement = this.el.nativeElement.querySelector('ion-input');
    this.renderer.removeClass(inputElement, 'input-highlight');
  }
}
