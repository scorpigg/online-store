import { createContext } from 'react';
import { IProducts } from './carBase';

interface IAppContext {
  cartItems: IProducts[];
  isItemAdded: (id: number) => boolean;
  itemsCount: number;
  itemsView: string;
  onItemView: (view: string) => void;
  isCartSubmit: boolean;
  onCartSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onAddCartItem: (car: IProducts) => void;
  buyModalClose: () => void;
  modalClose: boolean;
  visibleCars: IProducts[];
  setVisibleCars: (arr: IProducts[]) => void;
  addDiscount: boolean;
  onAddDiscount: () => void;
  addRSDiscount: boolean;
  onAddRSDiscount: () => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);
