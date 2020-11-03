import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {EditorComponent} from './editor/editor.component';


const routes: Routes = [
  {path: '', component: EditorComponent},
  {path: 'preview', component: PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
