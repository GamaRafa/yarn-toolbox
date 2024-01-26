import { YarnModel } from 'src/app/core/models/yarn.model';
import { DataService } from './../../../core/services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YarnStashService {

  listData: YarnModel[] = []

  constructor(private dataService: DataService) { }

  async addYarn(yarn: YarnModel){
    this.dataService.addData(yarn)
    console.log('addData service ok')
  }

  fetchYarn(): Promise<YarnModel[]>{
    return new Promise<YarnModel[]>((resolve, reject) => {
      this.dataService.getData().subscribe(
        res => {
          this.listData = res
          console.log(this.listData)
          resolve(this.listData)
        },
        error => {
          reject(error)
        }
      )
    })
    // this.dataService.getData().subscribe(res => {
    //   this.listData = res
    //   console.log(this.listData)
    // })
    // console.log('fetch yarn ok')
    // console.log(this.listData)
    // return this.listData
  }
}
