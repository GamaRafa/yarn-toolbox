import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  getPageName(): string {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    switch (id){
      case 'yarn-stash':
        return 'Yarn Stash'
      case 'row-counter':
        return 'Contador de carreiras'
      case 'rep-counter':
        return 'Contador de repetições'
      case 'increase-calculator':
        return 'Calculadora de aumentos'
      case 'decrease-calculator':
        return 'Calculadora de diminuições'
      default:
        return 'Home'
    }
  }

  ngOnInit() {
    this.folder = this.getPageName()
  }
}
