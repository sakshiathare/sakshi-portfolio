import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
  education = [
    {
      degree: 'Masters in Computer Science (Pursuing)',
      institute: 'New Arts, Commerce and Science College, Ahmednagar',
      university: 'Savitribai Phule Pune University'
    },
    {
      degree: 'Bachelor of Computer Science (2020 - 2023)',
      institute: 'New Arts, Commerce and Science College, Ahmednagar',
      university: 'Savitribai Phule Pune University',
      grade: '8.09 CGPA'
    },
    {
      degree: 'Class 12 (2019 - 2020)',
      institute: 'Maharashtra State Board',
      grade: '66.30%'
    },
    {
      degree: 'Class 10 (2017 - 2018)',
      institute: 'State Board of Maharashtra',
      grade: '84.40%'
    }
  ];
}
