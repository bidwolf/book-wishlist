export enum Genres {
  ROMANCE = "Romance",
  FICTION = "Fiction",
  EDUCATION = "Education"
}
export type Book = {
  title: string
  description: string
  genre: Genres
  release_date: number
  author: string
  ISBN: string
  publisher: string
  url_cover?: string
};