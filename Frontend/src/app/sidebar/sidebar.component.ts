import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(){
     this.document.body.classList.value='page-header-fixed page-sidebar-closed-hide-logo page-content-white';
  }

}
