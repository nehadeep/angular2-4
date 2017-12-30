import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders  } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
// import {MatIconModule, MatIconRegistry} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import { NgxDualListboxModule } from 'ngx-dual-listbox';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavigationComponent } from './admin/admin-navigation/admin-navigation.component';
import { AdminUniversalordersComponent } from './admin/admin-universalorders/admin-universalorders.component';
import { HomeMainComponent } from './homeMain/home-main/home-main.component';

import { CommonDataService } from './shared/services/common-data.service';
import { EditUoComponent } from './admin/admin-universalorders/edit-uo/edit-uo.component';
import { EditUoNewComponent } from './admin/admin-universalorders/edit-uo-new/edit-uo-new.component';
import { FieldErrorDisplayComponent } from './shared/component/field-error-display/field-error-display.component';
import { SharedDataService } from './shared/services/shared-data.service';
import { FormatComponent } from './admin/batch/format/format.component';
import { BatchtaskComponent } from './admin/batch/batchtask/batchtask.component';

import {MatTabsModule} from '@angular/material/tabs';
import { DetailComponent } from './admin/batch/detail/detail.component';
import { EventComponent } from './admin/batch/event/event.component';
import { StatesComponent } from './admin/batch/states/states.component';
import { ContactComponent } from './admin/batch/contact/contact.component';
import { NgxDualListboxComponent } from './shared/component/ngx-dual-listbox/ngx-dual-listbox.component';
const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeMainComponent},
{path: 'administration', component: AdminNavigationComponent},
{path: 'adminUniversalOrder', component: AdminUniversalordersComponent},
{path: 'edit_uo', component: EditUoComponent},
{path: 'edit_uo_new', component: EditUoNewComponent},
{path: 'batch_task', component: BatchtaskComponent,
children: [
  {path: '', redirectTo: 'batch_taskDetail', pathMatch: 'full'},
  {path: 'batch_taskDetail', component: DetailComponent},
  {path: 'format', component: FormatComponent},
  {path: 'event', component: EventComponent},
  {path: 'states', component: StatesComponent},
  {path: 'contact', component: ContactComponent},
]
},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    AdminNavigationComponent,
    AdminUniversalordersComponent,
    EditUoComponent,
    EditUoNewComponent,
    FieldErrorDisplayComponent,
    FormatComponent,
    BatchtaskComponent,
    DetailComponent,
    EventComponent,
    StatesComponent,
    ContactComponent,
    NgxDualListboxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true, useHash: false}),
    FormsModule,
    Ng2CompleterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDualListboxModule.forRoot()
  ],
  exports: [NgxDualListboxComponent],
  providers: [CommonDataService, SharedDataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDualListboxModule
    };
  }
 }
