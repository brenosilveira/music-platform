import { Album } from './Album.model';

export type AlbumResponse = {
  albummatches: {
    album: Album[]
  }
}
