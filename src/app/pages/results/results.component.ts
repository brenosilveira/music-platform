import { HistoryService } from './../../shared/services/history.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/shared/models/Artist.model';
import { Track } from 'src/app/shared/models/Track.model';
import { Album } from 'src/app/shared/models/Album.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  artists: Artist[] = [];
  albums: Album[] = [];
  tracks: Track[] = [];
  private unsubscribe = new Subject()

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private historyService: HistoryService
  ){
    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(params => this.refresh())
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.unsubscribe.next(true)
    this.unsubscribe.complete()
  }

  async refresh() {
    const param = this.route.snapshot.queryParams['term']

    this.artists = await this.apiService.searchByArtist(param, 6).then(res => res.results.artistmatches.artist)
    this.tracks = await this.apiService.searchByTrack(param).then(res => res.results.trackmatches.track)
    this.albums = await this.apiService.searchByAlbum(param, 9).then(res => res.results.albummatches.album)

    this.historyService.addTerm(param)
  }
}
