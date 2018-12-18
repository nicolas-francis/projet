import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: Boolean;

  constructor() { 
    this.visible = false;
  }

  show() {
    this.visible = true;
  }
}
