import { Track } from "./Track.model"

export type TrackResponse = {
  trackmatches: {
    track: Track[]
  }
}
