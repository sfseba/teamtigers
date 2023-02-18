import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  scrolled: boolean = false;
  prevY = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const currentY = window.pageYOffset;
    if(currentY > 40){
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
    this.prevY = currentY
  }

}

