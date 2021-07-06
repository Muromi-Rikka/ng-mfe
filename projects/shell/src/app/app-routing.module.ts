import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { createMicroFrontendRoutes } from 'ng-module-federation';
import { microFrontends } from '../micro-frontends';

const routes: Routes = [...createMicroFrontendRoutes(microFrontends)];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
