import { Image } from "./Image.model"

export type Artist = {
  image: Image[],
  listeners: string,
  name: string,
  mbid: string,
  playcount: string,
  streamable: string,
  url: string
}
