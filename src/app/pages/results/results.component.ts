import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AlbumResponse } from 'src/app/shared/models/AlbumResponse.model';
import { ArtistResponse } from 'src/app/shared/models/ArtistResponse.model';
import { SearchResponse } from 'src/app/shared/models/SearchResponse.model';
import { TrackResponse } from 'src/app/shared/models/TrackResponse.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { IApiService } from './../../shared/interface/IApiService';
import { HistoryService } from './../../shared/services/history.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [
    {
      provide: 'IApiService',
      useClass: ApiService
    }
  ]
})
export class ResultsComponent implements OnInit {

  artists!: Observable<SearchResponse<ArtistResponse>>;
  albums!: Observable<SearchResponse<AlbumResponse>>;
  tracks!: Observable<SearchResponse<TrackResponse>>;

  
  private unsubscribe = new Subject()

  constructor(
    private route: ActivatedRoute,
    @Inject('IApiService') private apiService: IApiService,
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

  refresh() {
    const param = this.route.snapshot.queryParams['term']

    this.artists = this.apiService.searchByArtist(param, 6)
    this.tracks = this.apiService.searchByTrack(param)
    this.albums = this.apiService.searchByAlbum(param, 9)

    this.historyService.addTerm(param)
  }
}
