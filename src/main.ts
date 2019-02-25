import 'reflect-metadata'
import { container } from 'tsyringe'
import Instance from './Instance'

const setEnv = (config) => {
  process.env.SPREE_HOST = config.host
}

export const makeClient = (config) => {
  setEnv(config)

  return container.resolve(Instance)
}
