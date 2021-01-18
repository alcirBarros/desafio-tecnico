import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { ContentModule } from './content/content.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { SidebarLeftModule } from './sidebar-left/sidebar-left.module';
import { SidebarRightModule } from './sidebar-right/sidebar-right.module';
import { WrapperModule } from './wrapper/wrapper.module';

import { LayoutService } from './layout.service';
import { LayoutState } from './layout.state';
import { layoutProvider } from './layout.provider';

import { RoutingService } from '../services/routing.service';
import { WrapperService } from './wrapper/wrapper.service';
import { SidebarRightService } from './sidebar-right/sidebar-right.service';
import { HeaderService } from './header/header.service';
import { FooterService } from './footer/footer.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from '../auth-jwt/jwt.interceptor';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [ContentModule, FooterModule, HeaderModule, SidebarLeftModule, SidebarRightModule, WrapperModule],
  providers: [
    RoutingService, WrapperService, SidebarRightService, HeaderService, FooterService
  ]
})
export class LayoutModule {

  /**
   * @method constructor
   * @param parentModule [description]
   */
  constructor(@Optional() @SkipSelf() parentModule: LayoutModule) {
    if (parentModule) {
      throw new Error('LayoutModule is already loaded. Import it in the AppModule only!');
    }
  }

  /**
   * [forRoot description]
   * @method forRoot
   * @param  layoutConfig [description]
   * @return [description]
   */
  static forRoot(layoutConfig: LayoutState): ModuleWithProviders<any> {
    return {
      ngModule: LayoutModule,
      providers: [...layoutProvider(layoutConfig), LayoutService,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }]
    };
  }
}

export * from './layout.service';
export * from './layout.store';
export * from './layout.state';
