import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      category: 'Core Java',
      icon: 'fas fa-laptop-code',
      level: 80
    },
    {
      category: 'Spring Boot',
      icon: 'fas fa-server',
      level: 70
    },
    {
      category: 'Angular',
      icon: 'fab fa-angular',
      level: 70
    },
    {
      category: 'HTML/CSS',
      icon: 'fas fa-code',
      level: 95
    },
    {
      category: 'MySQL',
      icon: 'fas fa-database',
      level: 80
    },
    {
      category: 'JavaScript',
      icon: 'fab fa-js-square',
      level: 50
    }
  ];
}
