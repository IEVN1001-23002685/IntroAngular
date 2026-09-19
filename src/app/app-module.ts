import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesIst } from './heroes/heroes-ist/heroes-ist';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';

@NgModule({
  declarations: [App, HeroesIst, HeroesFilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
