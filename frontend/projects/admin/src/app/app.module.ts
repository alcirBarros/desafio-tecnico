import { adminLteConf } from './admin-lte.conf';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from 'projects/admin-template/src/lib/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [   
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
