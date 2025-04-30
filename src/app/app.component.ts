import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../app/services/flowbite.service';
import { HomeComponent } from './components/home/home.component'; 
import { AboutComponent } from './components/about/about.component'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from "./components/projects/projects.component"; 

@Component({
  selector: 'app-root',
  standalone: true, // Si estás usando un componente standalone
  imports: [
    AboutComponent, HomeComponent, NavbarComponent,
    ProjectsComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portafolio';

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
