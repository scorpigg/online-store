import { createContext } from 'react';
import { IProducts } from './carBase';

interface IAppContext {
  cartItems: IProducts[];
  isItemAdded: (id:number) => boolean;
  itemsCount: number;
  itemsView: string;
  onItemView: (view:string) => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);