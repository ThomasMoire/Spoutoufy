import { Component, Input } from '@angular/core';
import { Album } from '../../interfaces/Album';
import { Music } from '../../interfaces/Music';
import { APIService } from '../../services/API/api.service';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-music-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.css'
})
export class MusicCardComponent {
  music: any;

  constructor(private API: APIService) { }

  musics: Music[] = [];
  

  @Input() set id(musicId: number) {
    this.API.getMusicById(musicId)
    .then((music: any)=>{
      this.music = music;
    })
    .catch((error: any)=>console.log(error));
  }
}
