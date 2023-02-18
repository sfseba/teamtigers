import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrolled: boolean = false;
  bg_dark = false;
  narrowed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.onResize()
    this.handleScroll()
  }

  @HostListener('window:resize', ['$event'])
    onResize() {
      const currentWidth = window.innerWidth;
      console.log(currentWidth);

      if(currentWidth <= 1024) {
        this.narrowed = true;
      } else {
        this.narrowed = false;
      }
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const currentY = window.pageYOffset;
      
      if(currentY >= 10){
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }


      if(currentY != 0) {
        this.bg_dark = true;
      } else {
        this.bg_dark = false;
      }
    }
}
