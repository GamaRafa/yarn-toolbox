import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, Observable, filter, from, of, switchMap } from 'rxjs';
import { YarnModel } from '../models/yarn.model';

const STORAGE_KEY = 'yarnStash'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storageReady = new BehaviorSubject(false)

  constructor(private storage: Storage) {
    this.init()
  }

  async init(){
    await this.storage.defineDriver(CordovaSQLiteDriver)
    await this.storage.create()
    this.storageReady.next(true)
  }

  // CREATE
  async addData(yarn: YarnModel){
    const storedData = (await this.storage.get(STORAGE_KEY)) || []
    storedData.push(yarn)
    return this.storage.set(STORAGE_KEY, storedData)
  }
  // READ
  getData(): Observable<YarnModel[]>{
    return this.storageReady.pipe(
      filter(ready => ready),
      switchMap(_ => {
        return from(this.storage.get(STORAGE_KEY)) || of([])
      })
    )
  }
  // UPDATE

  // DELETE
  async removeData(index: number){
    const storedData = await this.storage.get(STORAGE_KEY) || []
    storedData.splice(index, 1)
    return this.storage.set(STORAGE_KEY, storedData)
  }

}
