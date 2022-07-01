import { Artist } from './Artist.model';

export type Album = Omit<Artist, 'listeners' | 'playcount'> & {
  artist: string,
}
