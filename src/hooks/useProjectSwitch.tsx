import { onProjectSwitch } from '@/store/slice/project'
import { useCallback } from 'react'
import { useRootDispatch, useRootSelector } from './useStore'

export const useProjectSwitch = () => {
  const { currentProject } = useRootSelector(state => state.project)
  const dispatch = useRootDispatch()

  const toggleProject = useCallback(
    (projectKey: string) => {
      if (currentProject === projectKey) return
      dispatch(onProjectSwitch(projectKey))
    },
    [currentProject, dispatch]
  )
  return {
    currentProject,
    toggleProject
  }
}
