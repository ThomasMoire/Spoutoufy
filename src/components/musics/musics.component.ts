import { Component, OnInit } from '@angular/core';
import { Music } from '../../interfaces/Music';
import { MusicService } from '../../services/Music/music.service';
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
  constructor(private API: MusicService) { }
  musics: Music[] = [];

  ngOnInit(): void {
    this.API.getMusics().subscribe((musics)=> {
      this.musics = musics
    })
  }
  async deleteMusic(music: Music) {
    const res = await fetch(`http://localhost:3030/music/${music.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(music)
    });
    return await res.json();
  }
}