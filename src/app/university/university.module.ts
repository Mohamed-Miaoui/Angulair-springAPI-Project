import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { UniversitiesComponent } from './universities/universities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUniComponent } from './add-uni/add-uni.component';
import { EdituniComponent } from './edituni/edituni.component';


@NgModule({
  declarations: [UniversitiesComponent,AddUniComponent,EdituniComponent],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UniversityModule { }
