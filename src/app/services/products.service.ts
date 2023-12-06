import { Injectable } from '@angular/core';

// const domain = 'https://github.com/yeldynov'

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

// function addDomainToLinkAndImage(product: IProduct) {
//   return {
//     ...product,
//     image: domain + product.image,
//     link: domain + product.link,
//   }
// }

const products: IProduct[] = [
  {
    id: '29',
    title: 'TypeScript',
    link: 'https://github.com/yeldynov',
    image: 'https://picsum.photos/id/1/200',
    text: 'Основи, типи, компілятор, класи, дженеріки, декоратори та більше...',
    time: 'З досвідом | 2 тижні',
    type: ProductType.Skill,
  },
  {
    id: '30',
    title: 'JavaScript',
    link: 'https://github.com/yeldynov',
    image: 'https://picsum.photos/id/2/200',
    text: 'Основи Javascript',
    time: 'З досвідом | 2 тижні',
    type: ProductType.Intensive,
  },
  {
    id: '31',
    title: 'HTML & CSS',
    link: 'https://github.com/yeldynov',
    image: 'https://picsum.photos/id/3/200',
    text: 'Основи Web Development',
    time: 'З досвідом | 2 тижні',
    type: ProductType.Course,
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products: IProduct[] = products;

  getById(id: string) {
    return this.products.find(p => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {})
  }

  constructor() { }
}
