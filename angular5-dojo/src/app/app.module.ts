import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { MyPlansComponent } from './components/my-plans/my-plans.component';
import { MyTagsComponent } from './components/my-tags/my-tags.component';
import { SharedModule } from './shared/shared.module';
import { PlansService } from './shared/services/plans.service';
import { AppConfig } from './app.config';

function initConfig(config: AppConfig){
  return () => config.load() 
 }
 
const appRoutes: Routes = [
  { path: '', component: NewPlanComponent},
  { path: 'new-plan', component: NewPlanComponent },
  { path: 'my-plans', component: MyPlansComponent },
  { path: 'my-tags', component: MyTagsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NewPlanComponent,
    MyPlansComponent,
    MyTagsComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), 
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [PlansService,
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
