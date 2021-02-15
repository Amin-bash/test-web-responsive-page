import React from 'react';
import { ProductsStore } from './Stores/Products';

type RootStateContextValue = {
  productsStore: ProductsStore
}

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue)


const productsStore = new ProductsStore();

// export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
export const RootStateProvider: any = ({ children }) => {

  return <RootStateContext.Provider value={{ productsStore }}>
    {children}
  </RootStateContext.Provider>
}


export const useRootStore = () => React.useContext(RootStateContext)