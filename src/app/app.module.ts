import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from "./My_Component/todos/todos.component";
import { TodoItemComponent } from './My_Component/todo-item/todo-item.component';
import { AddTodoComponent } from './My_Component/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './My_Component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
