import { Component } from '@angular/core';
import { CreateProjectComponent } from '../create-project-component/create-project-component';
import { LoginComponent } from '../auth/login-component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-dashboard-component',
  imports: [CreateProjectComponent, LoginComponent, ReactiveFormsModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {



}
