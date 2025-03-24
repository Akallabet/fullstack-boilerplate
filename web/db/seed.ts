/// <reference path="./global.d.ts" />
import { Entities } from '@platformatic/sql-mapper'
import { AppEntities } from './global'
import { Movie } from './types'

const movies: Movie[] = [
  { title: 'Harry Potter' },
  { title: 'The Matrix' }
]

export async function seed (opts: { entities: AppEntities }) {
  for (const movie of movies) {
    await opts.entities.movie.save({ input: movie })
  }
  // await opts.entities.crmUser.save({ input: {name: 'John Doe'} })
}
