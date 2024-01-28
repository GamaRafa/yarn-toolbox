import { ProjectCounterService } from './../../../core/services/project-counter.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProjectCounterModel } from 'src/app/core/models/project-counter.model';

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
  rowNumber: number = 1
  paramValue: string
  project: ProjectCounterModel

  constructor(
    private projectCounterService: ProjectCounterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramValue = this.route.snapshot.params['project']
    this.fetchData()
  } // usar onInit pra buscar as informações de cada projeto

  minus(): void {
    this.rowNumber -= 1
    if (this.rowNumber < 1){
      this.rowNumber = 1
    }
  }

  plus(): void {
    this.rowNumber += 1
  }

  async fetchData(){
    this.projectCounterService.getOne(this.paramValue).subscribe(res => {
      this.project = res
      console.log(this.project)
      this.projectName = this.project.projectName
      this.rowNumber = this.project.currentRow
    })
  }

}
