import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [

  {path:'knowledge',component:KnowledgeComponent},
  {path:'notification',component:NotificationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
