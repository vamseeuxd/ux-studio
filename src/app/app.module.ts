import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {UserFormComponent} from './user-form/user-form.component';
import {HeaderComponent} from './header/header.component';
import {UserListComponent} from './user-list/user-list.component';
import {ManageFormNameInputComponent} from './components/form/manage-form-name-input/manage-form-name-input.component';
import {ManageFormComponent} from './components/form/manage-form/manage-form.component';
import {ManageControllerNameInputComponent} from './components/controller/manage-controller-name-input/manage-controller-name-input.component';
import {ManageControllerComponent} from './components/controller/manage-controller/manage-controller.component';
import {DraggableListComponent} from './components/draggable-list/draggable-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DynamicFormInputComponent} from './components/dynamic-form-input/dynamic-form-input.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DeviceEmulatorComponent} from './device-emulator/device-emulator.component';
import {PreviewComponent} from './preview/preview.component';
import {EditorComponent} from './editor/editor.component';
import {ContextMenuComponent} from './context-menu/context-menu.component';
import {VirtualPageComponent} from './virtual-page/virtual-page.component';

import {AlertModule} from 'ngx-bootstrap/alert';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {DatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {RatingModule} from 'ngx-bootstrap/rating';
import {SortableModule} from 'ngx-bootstrap/sortable';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import { ResponsiveColumnComponent } from './responsive-column/responsive-column.component';
import { LeftSlideNavComponent } from './left-slide-nav/left-slide-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeaderComponent,
    UserListComponent,
    ManageFormNameInputComponent,
    ManageControllerNameInputComponent,
    ManageControllerComponent,
    ManageFormComponent,
    DraggableListComponent,
    DynamicFormInputComponent,
    DeviceEmulatorComponent,
    PreviewComponent,
    EditorComponent,
    ContextMenuComponent,
    VirtualPageComponent,
    ResponsiveColumnComponent,
    LeftSlideNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    DragDropModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
