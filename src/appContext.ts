import { createContext } from 'react';
import { IProducts } from './carBase';

interface IAppContext {
  cartItems: IProducts[];
  isItemAdded: (id:number) => boolean;
  itemsCount: number;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);