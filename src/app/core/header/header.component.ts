import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  toggleSideNav() { this.SideNavToggle.emit() }
}
