import { Component, inject, Input } from '@angular/core';
import { Music } from '../../interfaces/Music';
import { MusicService } from '../../services/Music/music.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  private API = inject(MusicService);

@Input() text ! : string;

searchedMusics : Music[] = [];

ngOnInit(): void {
  if(this.text){
    this.API.searchedMusics(this.text).subscribe((searchedMusics)=> {
      this.searchedMusics = searchedMusics
    })
  }
}
}