import { Component, OnInit } from '@angular/core';

const WIDTH_BREAKPOINT = 720;  

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${WIDTH_BREAKPOINT}px)`);

  constructor() { }

  ngOnInit(): void {
  }

  isScreenSmall(): boolean {

    return this.mediaMatcher.matches; 
  }
}
