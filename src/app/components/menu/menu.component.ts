import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div class="app-menu-component">
        {{title}}
    </div>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  title = 'menu';
}
