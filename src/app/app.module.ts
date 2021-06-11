import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { bgblueDirective } from './Directives/bluebg.directive';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { test4Module } from './test4.module';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    bgblueDirective,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    test4Module,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
