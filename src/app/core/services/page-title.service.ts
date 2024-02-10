import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private pageTitleKey = 'selectedPageTitle'
  private pageTitle: string = 'Home'

  constructor (private route: ActivatedRoute){
    const storedTitle = localStorage.getItem(this.pageTitleKey)
    if (storedTitle){
      this.pageTitle = storedTitle
    }
    this.getTitle()
  }

  getPageTitle(): string {
    return this.pageTitle
  }

  setPageTitle(title: string){
    this.pageTitle = title
    localStorage.setItem(this.pageTitleKey, title)
  }

  getTitle(){
    console.log(this.route.snapshot.paramMap.get)
  }
}