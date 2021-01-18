import { Component } from '@angular/core';

@Component({
	selector: 'app-menu',
	template: `
	<div class="app-menu-component">
		<!--TODO: only show menu title when it is not the profile page-->
		<div class="menu-title">
			<h1>Alicia F. Rodriguez</h1>
		</div>
    	<div class="menu-items">
			<div *ngFor="let menuItem of menuItems">
				<a>{{ menuItem.name }}</a>
			</div>
		</div>
	</div>
	`,
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
	menuItems = [
		{
			name: 'Profile',
			route: '',
		},
		{
			name: 'Experience',
			route: '',
		},
		{
			name: 'Work',
			route: '',
		},
		{
			name: 'Research',
			route: '',
		},
		{
			name: 'Contact',
			route: '',
		},
	];
}
