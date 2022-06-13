import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarmoreHomeComponent } from './marmore-home/marmore-home.component';
import { MarmoreTarefasComponent } from './marmore-tarefas/marmore-tarefas.component';
import { MarmoreTasksServiceService } from './marmore-tasks-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MarmoreHomeComponent,
      },
      { path: 'tarefas', component: MarmoreTarefasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MarmoreHomeComponent,
    MarmoreTarefasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MarmoreTasksServiceService],
})
export class AppModule {}
