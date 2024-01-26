import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

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

  projectName: string = 'Hedwig'

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){
    this.route.params.subscribe( params => {
      const project = params['project']
    })
  }

  toProject(){
    this.router.navigate(['/row-counter', this.projectName])
  }

  ngOnInit(): void {
    
  }
}