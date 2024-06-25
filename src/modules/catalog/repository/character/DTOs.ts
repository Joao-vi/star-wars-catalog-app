export interface CharacterDTO {
  name: string
  height: string
  mass: string
  birth_year: string
  gender: string
  hair_color: string
  skin_color: string
  eye_color: string

  homeworld: string
  films: string[]
  species: any[]
  vehicles: string[]
  starships: string[]

  created: string
  edited: string
  url: string
}

export type GetCharactersDTO = {
  page?: number
  search?: string
}
