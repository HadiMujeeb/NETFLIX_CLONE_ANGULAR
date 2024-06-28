import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.servies'; // Adjust the path as necessary

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Corrected property name
})
export class HeaderComponent {
  // @Input({required: true}) userImg: string = ''; 
  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  auth = inject(AuthService);
  
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"];
}
