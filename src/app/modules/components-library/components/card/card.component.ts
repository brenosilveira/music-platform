import { Component, Input, OnInit } from '@angular/core';
import { faMusic, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  icon =  faMusic;
  starIcon = faStar;

  @Input()
  imageSrc: string = '';

  @Input()
  artist: string = '';

  @Input()
  title: string = '';

  @Input()
  listeners: string = '';

  @Input()
  iconName: 'star' | 'music' = 'music';

  constructor() { }

  ngOnInit(): void {
  }

}
