import { OverlayEventDetail } from '@ionic/core/components';
import { Component, OnInit } from '@angular/core';
import { YarnStashService } from '../services/yarn-stash.service';
import { YarnModel } from 'src/app/core/models/yarn.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-yarn-stash',
  templateUrl: './yarn-stash.component.html',
  styleUrls: ['./yarn-stash.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class YarnStashComponent  implements OnInit {

  public data: YarnModel[]

  yarnForm: FormGroup

  mockYarn: YarnModel = {
    name: 'Urbano',
    brand: 'Círculo',
    currentQuantity: '10g',
    color: 'Azul'
  }

  page = 0
  resultsCount = 10
  totalPages = 10
  

  constructor(
    private yarnStashService: YarnStashService,
    private dataService: DataService,
    private fb: FormBuilder
    ){}

  ngOnInit() {
    this.fetchData()
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    }
  }

  createForm(yarn: YarnModel){
    this.yarnForm = new FormGroup({
      name: new FormControl(yarn.name),
      brand: new FormControl(yarn.brand),
      originalYardage: new FormControl(yarn.originalYardage),
      weight: new FormControl(yarn.weight),
      currentQuantity: new FormControl(yarn.currentQuantity),
      tex: new FormControl(yarn.tex),
      color: new FormControl(yarn.color),
      composition: new FormControl(yarn.composition)
    })
  }

  async fetchData(){
    this.dataService.getData().subscribe(res => {
      this.data = res
    })
  }

  async createYarn(yarn: YarnModel){
    console.log(yarn)
    this.dataService.addData(yarn)
  }

  onSubmit(){
    console.log('aaaaaaaaaa')
    const newYarn: YarnModel = this.yarnForm.value
    console.log(this.yarnForm.value)
    console.log(newYarn)
    this.dataService.addData(newYarn)
    this.yarnForm.reset()
  }

}
