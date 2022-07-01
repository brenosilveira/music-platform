import { Artist } from "./Artist.model"

export type ArtistResponse = {
  artistmatches: {
    artist: Artist[]
  }
}
