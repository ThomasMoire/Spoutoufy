import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink, HomeComponent],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {

  @Input() text: string = "";
  @Input() img: string = "";
  @Input() routerLink: string = "";

}
