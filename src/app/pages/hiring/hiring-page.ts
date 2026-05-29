import { Component } from '@angular/core'; 
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";
import { TranslatePipe } from '@ngx-translate/core';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'cookie-policy',
  imports: [Navbar, Footer, Container, TranslatePipe],
  templateUrl: './hiring-page.html',
  styles: `
        .bg-hiring{
            background: #ff7700;
background: linear-gradient(90deg, rgba(255, 119, 0, 1) 0%, rgba(255, 179, 0, 1) 15%, rgba(255, 156, 0, 1) 89%, rgba(255, 123, 0, 1) 100%);
        }
  `
})
export default class HiringPage {

}