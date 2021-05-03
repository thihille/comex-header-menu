import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmxHeaderMenuText } from './components/cmx-header-menu-text/cmx-header-menu-text';
import { CmxHeaderMenu } from './components/cmx-header-menu/cmx-header-menu';

@NgModule({
  declarations: [AppComponent, CmxHeaderMenu, CmxHeaderMenuText],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, CmxHeaderMenu],
})
export class AppModule {}
