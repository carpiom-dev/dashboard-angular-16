import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayPanelClass: 'w-auto' }
    }
  ]
})
export class FavoritesComponent implements OnInit {
  toppings;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  public menuItems;
  public favorites; 
  constructor(public menuService:MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems().filter(menu => menu.routerLink != null || menu.href !=null);
  }

}
