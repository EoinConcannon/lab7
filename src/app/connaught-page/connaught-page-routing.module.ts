import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnaughtPagePage } from './connaught-page.page';

const routes: Routes = [
  {
    path: '',
    component: ConnaughtPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnaughtPagePageRoutingModule {}
