import { createContext, useEffect, useState } from 'react'
import { IChildren } from '../interfaces/children'

interface AppContextType {
  isLoading: boolean
  setIsLoading: (e: boolean) => void
  titleCounter: string
  setTitleCounter: (e: string) => void
}

export const AppContext = createContext({} as AppContextType)

export function AppProvider({ children }: IChildren) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [titleCounter, setTitleCounter] = useState<string>(
    'Contagem regressiva'
  )

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        titleCounter,
        setTitleCounter
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
