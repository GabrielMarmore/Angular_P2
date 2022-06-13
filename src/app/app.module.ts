import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { MarmoreTasksServiceService } from './marmore-tasks-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      { path: 'tarefas', component: TarefasComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent, TarefasComponent],
  bootstrap: [AppComponent],
  providers: [MarmoreTasksServiceService],
})
export class AppModule {}
