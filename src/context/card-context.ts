import { createContext } from 'react'
import { CardContextType } from '../types/types'




const cardContext = createContext<CardContextType>({} as any)

export default cardContext