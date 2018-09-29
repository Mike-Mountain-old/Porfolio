import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {RouterModule} from '@angular/router';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
    ],
  declarations: [
    NavigationComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent
  ]
})
export class CoreModule { }
