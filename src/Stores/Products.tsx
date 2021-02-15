import { observable, action} from 'mobx';
import { Products } from '../models/Products';
import { getProducts } from '../api/api';

export class ProductsStore {

  @observable products:Array<Products> = [];

  @action
  loadProduct = () => {
    getProducts().then(products => {
      this.products = products;
      console.log(this.products, ' my products')
    })
  }

  // @action
  // SaveProducts = () => {
  //   postProducts(this.products)
  // }

  @action
  addProducts = (product: Products) => {
    this.products.push(product)
  }

}