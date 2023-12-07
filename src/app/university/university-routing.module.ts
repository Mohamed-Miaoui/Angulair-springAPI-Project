import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';
import { AddUniComponent } from './add-uni/add-uni.component';
import { EdituniComponent } from './edituni/edituni.component';
import { InfosComponent } from './infos/infos.component';

const routes: Routes = [
  {path: 'all', component:UniversitiesComponent},
  {path: 'add', component:AddUniComponent},
  {path: 'edit/:id', component:EdituniComponent},
  {path: 'infos', component:InfosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
