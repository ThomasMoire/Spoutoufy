import { Component, OnInit } from '@angular/core';
import { Music } from '../../interfaces/Music';
import { APIService } from '../../services/API/api.service';
import { RouterModule } from '@angular/router';
import { MusicCardComponent } from '../music-card/music-card.component';


@Component({
  selector: 'app-musics',
  standalone: true,
  imports: [RouterModule, MusicCardComponent],
  templateUrl: './musics.component.html',
  styleUrl: './musics.component.css'
})
export class MusicsComponent {
  constructor(private API: APIService) { }
  musics: Music[] = [];

  ngOnInit(): void {
    this.API.getMusics().subscribe((musics)=> {
      this.musics = musics
    })
  }
  deleteMusic(music: Music) {
    return fetch(`http://localhost:3030/music/${music.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(music) 
      }).then((res) => res.json());
  }
}