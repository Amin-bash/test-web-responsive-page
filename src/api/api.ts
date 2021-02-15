// import { ProductsData } from '../data/products';
import { productsDataPromise } from '../data/products';
import { Products } from '../models/Products';

export const getProducts = ():Promise<Products[]> => {
  // return fetch('./data.json').then(res => console.log(res.json, ' my log is '))
  return productsDataPromise()
}

// export const postProducts 