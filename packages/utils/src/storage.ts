import localforage from 'localforage'
import { Crypto } from './crypto'
const crypto = new Crypto()
/**
 * the storage type
 */
export type StorageType = 'local' | 'session'

export function createStorage<T extends object>(type: StorageType, isCrypto = false) {
  const stg = type === 'session' ? window.sessionStorage : window.localStorage

  const storage = {
    /**
     * set session
     * @param key session key
     * @param value session value
     */
    set<K extends keyof T>(key: K, value: T[K]) {
      const json = isCrypto ? crypto.encrypt(value) : JSON.stringify(value)
      // const json = ;

      stg.setItem(key as string, json)
    },
    /**
     * get session
     * @param key session key
     */
    get<K extends keyof T>(key: K): T[K] | null {
      const json = stg.getItem(key as string)
      if (json) {
        let storageData: T[K] | null = null

        try {
          storageData = isCrypto ? crypto.decrypt(json) : JSON.parse(json)
          // storageData = JSON.parse(json);
        } catch {}

        if (storageData) {
          return storageData as T[K]
        }
      }

      stg.removeItem(key as string)

      return null
    },
    remove(key: keyof T) {
      stg.removeItem(key as string)
    },
    clear() {
      stg.clear()
    }
  }
  return storage
}
