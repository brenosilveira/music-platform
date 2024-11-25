import { Observable } from 'rxjs';
import { AlbumResponse } from './../models/AlbumResponse.model';
import { ArtistResponse } from './../models/ArtistResponse.model';
import { SearchResponse } from './../models/SearchResponse.model';
import { TopArtist } from './../models/TopArtist.model';
import { TrackResponse } from './../models/TrackResponse.model';

export interface IApiService {
  getTopArtists(limit: number): Observable<TopArtist>
  searchByTrack(title: string, limit?: number): Observable<SearchResponse<TrackResponse>>
  searchByAlbum(title: string, limit?: number): Observable<SearchResponse<AlbumResponse>>
  searchByArtist(title: string, limit?: number): Observable<SearchResponse<ArtistResponse>>
}





