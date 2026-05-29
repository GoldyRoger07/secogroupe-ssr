import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hamburger-btn',
  imports: [CommonModule],
  templateUrl: './hamburger-btn.html',
  styleUrl: './hamburger-btn.css'
})
export class HamburgerBtn {
  isOpen = false

  @Input()
  callback: any

  @Input()
  option: any

  onClick(){
    this.isOpen = !this.isOpen

    this.callback(this.option)
  }
}
