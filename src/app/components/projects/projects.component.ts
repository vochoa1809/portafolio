import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  skills = new FormControl('');
  skillsList: string[] = ['PHP', 'C#', 'Node', 'Laravel', 'Symfony', 'Angular', 'Vue', 'React', 'HTML', 'JS', 'CSS', 'TS'];

  projects = new FormControl('');
  projectsList = [
    { 
      name: 'Inteliprex', 
      url: 'https://inteliprex.com/',
      hasUrl: true,
      description: 'Sitio web responsivo y de alto rendimiento, desarrollado con Laravel en el backend para garantizar seguridad y escalabilidad, y Vue.js en el frontend para una interfaz ágil e interactiva.',
      logo: '/assets/img/inteliprex.svg', 
      skills: ['PHP', 'Laravel', 'Vue', 'HTML', 'JS', 'CSS'] 
    },
    { 
      name: 'D-10', 
      url: 'https://d-10.inteliprex.com/',
      hasUrl: true,
      description: 'Sitio web responsivo y de alto rendimiento, desarrollado con Node.js en el backend para una arquitectura escalable y eficiente.',
      logo: '/assets/img/d10.svg', 
      skills: ['Node', 'Angular', 'Vue', 'JS', 'CSS'] 
    },
    { 
      name: 'SAOF', 
      url: '/',
      hasUrl: false,
      description: 'Sistema de Administración de Obligaciones  Financieras, desarrollado con Laravel en el backend para garantizar seguridad, escalabilidad y una gestión eficiente de datos, y Vue.js en el frontend para una interfaz intuitiva y ágil. Diseñado para facilitar el control y seguimiento de obligaciones financieras, optimizando procesos, automatizando cálculos y generando reportes detallados en tiempo real. Su arquitectura responsiva permite acceder desde cualquier dispositivo, asegurando una experiencia fluida y eficiente.', 
      logo: '/assets/img/saof.png', 
      skills: ['PHP', 'Laravel', 'Vue', 'HTML', 'JS','CSS'] 
    },
    { 
      name: 'Capital Nexus', 
      url: '/',
      hasUrl: false,
      description: 'Sistema de Administración de Cartera, desarrollado con Node.js y React usando TypeScript, brindando una arquitectura moderna, robusta y tipada que garantiza seguridad, escalabilidad y mantenibilidad del código. Diseñado para optimizar la gestión de cuentas por cobrar y pagar, automatizar procesos financieros y generar reportes detallados en tiempo real. Su interfaz responsiva permite el acceso desde cualquier dispositivo, ofreciendo una experiencia fluida e intuitiva.', 
      logo: '/assets/img/capital_nexus.svg', 
      skills: ['Node', 'React', 'HTML', 'TS','CSS'] 
    },
    { 
      name: 'Trane', 
      url: '/',
      hasUrl: false,
      description: 'Sistema Administrativo y de Facturación desarrollado en C#, diseñado para optimizar la gestión empresarial mediante la automatización de procesos administrativos, control de inventarios y generación de facturas electrónicas. Su arquitectura robusta garantiza seguridad, escalabilidad y eficiencia en el manejo de datos. Además, ofrece una interfaz intuitiva y responsiva, permitiendo acceso desde distintos dispositivos para una administración ágil y precisa.', 
      logo: '/assets/img/trane.png', 
      skills: ['C#', 'Angular', 'Vue', 'HTML', 'JS', 'CSS'] 
    }
  ];

  get filteredProjects() {
    const selectedSkills = this.skills.value;
    if (!selectedSkills || selectedSkills.length === 0) {
      return this.projectsList; // Si no se seleccionaron skills, mostramos todos los proyectos
    }

    // Filtramos los proyectos que tengan al menos uno de los skills seleccionados
    return this.projectsList.filter(project => 
      project.skills.some(skill => selectedSkills.includes(skill))
    );
  }
}
