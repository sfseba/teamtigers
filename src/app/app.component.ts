import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  schema = {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    'name': 'TEAM TIGERS TAEKWONDO ACADEMY',
    'image': '/assets/tiger_image.png',
    'telephone': '(415) 515-5153',
    'email': 'teamtigerstkd@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '2515 S El Camino Real, San Mateo, CA94403'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': {
        '@type': 'DayOfWeek',
        'name': 'Mon - Fri : 3:00PM - 8:00PM Sat - 11:00AM - 12:30PM'
      },
    'url': 'https://www.teamtigerstkd.com',
    'sameAs':['https://www.instagram.com/teamtigerstkd/', 'https://www.youtube.com/channel/UCEeh-mvwGtQ-hB2zILbBZzA', 'https://www.yelp.com/biz/team-tigers-taekwondo-academy-san-mateo', 'https://www.facebook.com/TeamTigersTaekwondoAcademy/']
    }
  };

  constructor() {}
}