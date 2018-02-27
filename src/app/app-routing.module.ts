import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages Components
import {
  Page1Component,
  Page2Component,
  Page3Component,
  Page4Component,
  Page5Component,
  Page6Component
} from './components/index';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: Page1Component },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
  { path: 'page5', component: Page5Component },
  { path: 'page6', component: Page6Component },
  // otherwise redirect to page 1 page
  { path: '**', component: Page1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [Page1Component, Page2Component, Page3Component, Page4Component, Page5Component, Page6Component];
