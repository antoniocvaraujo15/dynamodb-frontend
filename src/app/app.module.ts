import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { AddEditKnowledgeComponent } from './knowledge/add-edit-knowledge/add-edit-knowledge.component';
import { SharedService } from './shared.service';
import {HttpClientModule}from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './knowledge/view/view.component';
import { NotificationComponent } from './notification/notification.component';
@NgModule({
  declarations: [
    AppComponent,
    KnowledgeComponent,
    AddEditKnowledgeComponent,
    ViewComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
