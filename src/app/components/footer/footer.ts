import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Container } from "../container/container";
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'my-footer',
  imports: [TranslatePipe, CommonModule, Container, RouterLink],
  templateUrl: './footer.html',
  styles: ``
})
export class Footer {
  
}
