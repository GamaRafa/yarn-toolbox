import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private pageTitleKey = 'selectedPageTitle'
  private pageTitle: string = 'Home'

  constructor (){
    const storedTitle = localStorage.getItem(this.pageTitleKey)
    if (storedTitle){
      this.pageTitle = storedTitle
    }
  }

  getPageTitle(): string {
    return this.pageTitle
  }

  setPageTitle(title: string){
    this.pageTitle = title
    localStorage.setItem(this.pageTitleKey, title)
  }
}