import { Component, inject } from '@angular/core';
import { FakeStoreService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'stc-task';

  private readonly _fakeStoreService = inject(FakeStoreService);

  $users = this._fakeStoreService.getAllUsers();
  $products = this._fakeStoreService.getProducts();
}
