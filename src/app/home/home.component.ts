import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  heroContent = {
    title: 'Sakshi Athare',
    role: 'Java Backend & Angular Developer',
    brief: `I'm a Computer Science graduate with a passion for building scalable web applications. Skilled in 
    Java, Spring Boot, Angular, and MySQL, I focus on writing clean code and solving real-world problems. 
    Currently seeking an entry-level developer role to contribute and grow in a dynamic team.`,
    cta: 'Explore My Projects'
  };
}
