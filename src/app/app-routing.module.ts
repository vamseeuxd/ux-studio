import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {EditorComponent} from './editor/editor.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'editor', component: EditorComponent},
  {path: 'preview', component: PreviewComponent},
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
