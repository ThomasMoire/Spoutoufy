import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { MusicCardComponent } from "../music-card/music-card.component";
import { MusicsComponent } from "../musics/musics.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, MusicCardComponent, MusicsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
