import { IApiService } from './../interface/IApiService';
import { TrackResponse } from './../models/TrackResponse.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResponse } from '../models/SearchResponse.model';
import { TopArtist } from '../models/TopArtist.model';
import { AlbumResponse } from '../models/AlbumResponse.model';
import { ArtistResponse } from '../models/ArtistResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService {

  apiHost = environment.API_HOST
  apiKey = environment.API_KEY

  constructor(private httpClient: HttpClient) { }

  getTopArtists(limit: number = 10) {
    const URL = `${this.apiHost}/2.0/?method=chart.gettopartists&api_key=${this.apiKey}&format=json&limit=${limit}`
    return lastValueFrom(this.httpClient.get<TopArtist>(URL))
  }

  searchByTrack(title: string, limit: number = 10) {
    const URL = `${this.apiHost}/2.0/?method=track.search&track=${title}&api_key=${this.apiKey}&format=json&limit=${limit}`
    return lastValueFrom(this.httpClient.get<SearchResponse<TrackResponse>>(URL))
  }

  searchByAlbum(title: string, limit: number = 10) {
    const URL = `${this.apiHost}/2.0/?method=album.search&album=${title}&api_key=${this.apiKey}&format=json&limit=${limit}`
    return lastValueFrom(this.httpClient.get<SearchResponse<AlbumResponse>>(URL))
  }

  searchByArtist(title: string, limit: number = 10) {
    const URL = `${this.apiHost}/2.0/?method=artist.search&artist=${title}&api_key=${this.apiKey}&format=json&limit=${limit}`
    return lastValueFrom(this.httpClient.get<SearchResponse<ArtistResponse>>(URL))
  }
}
