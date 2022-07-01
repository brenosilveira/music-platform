import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse, faList, faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  iconHouse = faHouse;
  iconList = faList;
  iconBars =  faBars;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(param: string) {
    this.router.navigate(['/search'], {queryParams: {term: param}})
  }
}
