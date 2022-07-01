import { Artist } from "./Artist.model"

export type TopArtist = {
  artists: {
    artist: Artist[]
  }
}
