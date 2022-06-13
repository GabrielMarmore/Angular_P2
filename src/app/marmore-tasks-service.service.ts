import { Injectable } from '@angular/core';

@Injectable()
export class MarmoreTasksServiceService {
  list = ['Finalizar p2'];
  constructor() {}

  getList() {
    return this.list;
  }
  deleteItem(i: number) {
    this.list.splice(i, 1);
  }
  createItem(task: string) {
    this.list.push(task);
  }
}
