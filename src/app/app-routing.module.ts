import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './My_Component/about/about.component';
import { TodosComponent } from './My_Component/todos/todos.component';

const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
