import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Upload Resume', url: '/folder/resume', icon: 'clipboard' },
    { title: 'Placement Cell', url: 'placement', icon: 'earth' },
  ];
  public settings = [
    { title: 'Profile', url: '/folder/profile', icon: 'person-circle' },
    { title: 'Logout', url: '/folder/Logout', icon: 'log-out' },
  ];
  constructor() {}
}
