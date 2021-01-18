import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [MenuComponent],
	imports: [BrowserModule],
	exports: [MenuComponent],
	providers: [],
})
export class ComponentsModule {}
