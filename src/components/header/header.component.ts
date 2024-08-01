import { Component } from '@angular/core';
import { NavItemComponent } from "../nav-item/nav-item.component";
import { SearchResultComponent } from "../search-result/search-result.component";
import { MusicsComponent } from '../musics/musics.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavItemComponent, SearchResultComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
