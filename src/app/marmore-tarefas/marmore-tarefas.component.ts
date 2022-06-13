import { Component, OnInit } from '@angular/core';
import { MarmoreTasksServiceService } from '../marmore-tasks-service.service';

@Component({
  selector: 'app-marmore-tarefas',
  templateUrl: './marmore-tarefas.component.html',
  styleUrls: ['./marmore-tarefas.component.css'],
})
export class MarmoreTarefasComponent implements OnInit {
  lista = null;
  tarefa = 'Nome tarefa';
  constructor(private tasks: MarmoreTasksServiceService) {}

  deleteItem(i: number) {
    this.tasks.deleteItem(i);
  }

  createItem() {
    this.tasks.createItem(this.tarefa);
  }
  ngOnInit() {
    this.lista = this.tasks.getList();
  }
}
