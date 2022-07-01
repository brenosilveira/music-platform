import { TopArtist } from './../../shared/models/TopArtist.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Artist } from 'src/app/shared/models/Artist.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topArtistsResponse?: TopArtist
  topArtists: Artist[] = [];

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.topArtistsResponse = await this.apiService.getTopArtists()

    this.topArtists = this.topArtistsResponse.artists.artist
  }

}
