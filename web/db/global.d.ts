import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Movie,User } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Movie' | 'User'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  movie: Entity<Movie>,
    user: Entity<User>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'movie', hooks: EntityHooks<Movie>): any
    addEntityHooks(entityName: 'user', hooks: EntityHooks<User>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
