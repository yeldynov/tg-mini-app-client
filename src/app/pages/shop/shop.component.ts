import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list
      title="Буде цікаво!"
      subtitle="Вивчіть щось новеньке для розвитку особистості"
      [products]="products.byGroup['skill']"
    />
    <app-product-list
      title="Інтенсиви"
      subtitle="Проведи свій день продуктивно та з користю"
      [products]="products.byGroup['intensive']"
    />
    <app-product-list
      title="Курси"
      subtitle="Для тих хто бажає фундаментальних знань"
      [products]="products.byGroup['course']"
    />
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide();
  }
}
