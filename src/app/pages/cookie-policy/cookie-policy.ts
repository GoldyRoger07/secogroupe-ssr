import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";

@Component({
  selector: 'cookie-policy',
  imports: [Navbar, Footer, Container],
  templateUrl: './cookie-policy.html',
  styleUrl: './cookie-policy.css'
})
export default class CookiePolicy {

}
