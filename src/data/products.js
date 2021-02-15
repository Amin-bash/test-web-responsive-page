import banana from '../assets/img/bannana.jpeg';
import building from '../assets/img/building.jpeg';

export const ProductsData = () => {
  return [
    { name: "Illustration", id: 1, img: banana, lessons: 24, courseTime: 134 },
    { name: "Graphic design", id: 2, img: building, lessons: 30, courseTime: 236 },
    { name: "Illustration", id: 3, img: banana, lessons: 44, courseTime: 200 },
   ] 
}


// if we'll use it as a fake call with Mobx
export const productsDataPromise = () => {
  return new Promise((resolve) => {
    resolve(ProductsData())
  })
}
