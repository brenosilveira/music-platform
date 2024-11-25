import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { TopArtist } from './../../shared/models/TopArtist.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topArtistsResponse?: Observable<TopArtist>;

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    this.topArtistsResponse = this.apiService.getTopArtists();
  }

}
