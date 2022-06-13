import { Injectable } from '@angular/core';

@Injectable()
export class MarmoreTasksServiceService {
  list = ['Finalizar p2'];
  constructor() { }

  getList(){
    return this.list;
  }
}