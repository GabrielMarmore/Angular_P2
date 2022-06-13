import { Component, OnInit } from '@angular/core';
import { MarmoreTasksServiceService } from '../marmore-tasks-service.service';

@Component({
  selector: 'app-marmore-home',
  templateUrl: './marmore-home.component.html',
  styleUrls: ['./marmore-home.component.css'],
})
export class MarmoreHomeComponent implements OnInit {
  count;
  constructor(private tasks: MarmoreTasksServiceService) {}

  ngOnInit() {
    this.count = this.tasks.getList().length;
  }
}
