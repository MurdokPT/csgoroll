import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridOfBoxesComponent } from './components/grid-of-boxes/grid-of-boxes.component';
import { ViewBoxComponent } from './components/view-box/view-box.component';

const routes: Routes = [
  { path: '', component: GridOfBoxesComponent },
  { path: 'view-box', component: ViewBoxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
