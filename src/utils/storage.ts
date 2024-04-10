import { createStorage } from '@rascal/utils'

export const localStg = createStorage<StorageType.Local>('local')

export const sessionStg = createStorage<StorageType.Session>('session')
