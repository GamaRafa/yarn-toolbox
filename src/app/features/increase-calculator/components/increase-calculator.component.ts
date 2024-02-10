import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-increase-calculator',
  templateUrl: './increase-calculator.component.html',
  styleUrls: ['./increase-calculator.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class IncreaseCalculatorComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
