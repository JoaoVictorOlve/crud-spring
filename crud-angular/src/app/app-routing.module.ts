import { CoursesComponent } from './components/courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full' , redirectTo: 'courses' },
  { path: 'courses', loadChildren:()=> import('./components/courses.module').then(m => m.CoursesModule)}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
