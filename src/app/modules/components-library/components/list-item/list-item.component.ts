import { Component, Input, OnInit } from '@angular/core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  icon =  faMusic;

  @Input()
  title: string = '';

  @Input()
  listeners: string = '';

  @Input()
  artist: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
