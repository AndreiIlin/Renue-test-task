import { getRandomCount } from 'shared/libs';
import bonaqua from './assets/bonaqua.jpeg';
import bounty from './assets/bounty.jpeg';
import baikal from './assets/chernogolovka-baikal.jpeg';
import dushes from './assets/chernogolovka-dushes.jpeg';
import hrusteam from './assets/hrusteam.jpeg';
import kirieshki from './assets/kirieshki.jpeg';
import snickers from './assets/snickers.jpeg';
import sviatoiIstochnik from './assets/sviatoi_istochnik.jpeg';

export interface Product {
  id: number;
  name: string;
  count: number;
  price: number;
  img: string;
}

interface ProductsState {
  machineProducts: Product[],
  inventoryProducts: Product[],
}


export const productsInitialState: ProductsState = {
  inventoryProducts: [],
  machineProducts: [
    {
      id: 1,
      name: 'Черноголовка. Байкал',
      count: getRandomCount(),
      price: 30,
      img: baikal,
    },
    {
      id: 2,
      name: 'Черноголовка. Дюшес',
      count: getRandomCount(),
      price: 30,
      img: dushes,
    },
    {
      id: 3,
      name: 'Святой Источник',
      count: getRandomCount(),
      price: 21,
      img: sviatoiIstochnik,
    },
    {
      id: 4,
      name: 'Bon aqua',
      count: getRandomCount(),
      price: 30,
      img: bonaqua,
    },
    {
      id: 5,
      name: 'Snickers',
      count: getRandomCount(),
      price: 39,
      img: snickers,
    },
    {
      id: 6,
      name: 'Bounty',
      count: getRandomCount(),
      price: 39,
      img: bounty,
    },
    {
      id: 7,
      name: 'Кириешки. Ветчина с сыром',
      count: getRandomCount(),
      price: 25,
      img: kirieshki,
    },
    {
      id: 8,
      name: 'ХРУСteam. Багет',
      count: getRandomCount(),
      price: 27,
      img: hrusteam,
    },
  ],
};
