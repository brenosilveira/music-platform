import { ArtistResponse } from './../models/ArtistResponse.model';
import { AlbumResponse } from './../models/AlbumResponse.model';
import { TrackResponse } from './../models/TrackResponse.model';
import { SearchResponse } from './../models/SearchResponse.model';
import { TopArtist } from './../models/TopArtist.model';

export interface IApiService {
  getTopArtists(limit: number): Promise<TopArtist>
  searchByTrack(title: string, limit?: number): Promise<SearchResponse<TrackResponse>>
  searchByAlbum(title: string, limit?: number): Promise<SearchResponse<AlbumResponse>>
  searchByArtist(title: string, limit?: number): Promise<SearchResponse<ArtistResponse>>
}





