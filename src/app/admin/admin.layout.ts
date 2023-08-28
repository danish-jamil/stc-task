import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  template: `
    <header>Admin header</header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>  
    <footer>Admin Footer</footer>
  `,
  styles: [`
  
  `],
  imports: [RouterModule]
})
export class AdminLayout {}