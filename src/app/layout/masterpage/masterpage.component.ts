import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-masterpage',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './masterpage.component.html',
  styleUrl: './masterpage.component.scss'
})
export class MasterpageComponent {

}
