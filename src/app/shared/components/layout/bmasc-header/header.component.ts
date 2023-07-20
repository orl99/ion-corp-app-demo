import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bmasc-header-compenent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageNameTem: string;
  @Input() pageName: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.pageNameTem = this.pageName;
  }

  public goUserPage() {
    this.router.navigate(['/user']);
  }

}
