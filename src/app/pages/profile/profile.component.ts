import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="app-profile-page">
        <div class="name-background">
          <h1>Alicia F. Rodriguez</h1>
        </div>
        <div class="wave-right">
          <img src="assets/wave-right.png" alt="Bitmoji Alicia Waving">
        </div>
    </div>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    title = 'profile'
}
