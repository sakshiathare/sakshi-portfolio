import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Online Exam Portal',
      techStack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      description: `A secure and user-friendly platform developed for colleges to conduct exams online. 
      Features include secure login, student and admin modules, question banks, and score analytics.`,
      features: [
        'JWT-based authentication system',
        'Dynamic question generation & evaluation',
        'Responsive UI for students and admins'
      ],
      github: 'https://github.com/your-username/online-exam-portal',
      liveDemo: ''
    },
    {
      title: 'Prakruti Analysis Web Project',
      techStack: ['HTML', 'CSS'],
      description: `Frontend interface designed during internship to capture user inputs for prakruti analysis.`,
      features: [
        'Responsive design using HTML/CSS',
        'Collaborated with senior developers on UI refinements'
      ],
      github: '',
      liveDemo: ''
    }
  ];
}
