import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.css'
})
export class ProfileSettingsComponent {
  constructor(private router: Router) {}


  navigateToSettings(){
    this.router.navigate(['/'])
  }

}
