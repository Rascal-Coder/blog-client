import type { AppDispatch, RootState } from '@/store'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

export const useRootDispatch: () => AppDispatch = useDispatch
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector
