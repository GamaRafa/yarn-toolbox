import { ProjectCounterModel } from './../../core/models/project-counter.model';
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ProjectCounterService } from "src/app/core/services/project-counter.service";

@Component({
  selector: 'app-project-page',
  templateUrl: './projects-page.template.html',
  styleUrls: ['./projects-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ProjectsPageComponent implements OnInit {

  public projects: ProjectCounterModel[]

  mock1: ProjectCounterModel = {
    projectName: 'Hedwig',
    currentRow: 4
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectCounterService: ProjectCounterService
  ){
    this.route.params.subscribe( params => {
      const project = params['project']
    })
  }

  toProject(projectName: string){
    this.router.navigate(['/row-counter', projectName])
  }

  ngOnInit() {
    this.fetchData()
  }

  addMockProject(){
    this.projectCounterService.addData(this.mock1)
  }

  async fetchData(){
    this.projectCounterService.getData().subscribe(res => {
      this.projects = res
    })
  }
}