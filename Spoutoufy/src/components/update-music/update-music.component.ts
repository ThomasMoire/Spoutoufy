import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MusicService } from '../../services/Music/music.service';
import { MusicsComponent } from '../../components/musics/musics.component';
import { APIService } from '../../services/API/api.service';
import { Music } from '../../interfaces/Music';

@Component({
  selector: 'app-update-music',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './update-music.component.html',
  styleUrl: './update-music.component.css'
})
export class UpdateMusicComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.music)
  }

  private api = inject(APIService);
  private musicService = inject(MusicService);
  private musicsComponent = inject(MusicsComponent);

  music: Music [] = [];

  @Input() set id (musicId: number) {
    this.api.getMusicById(musicId)
      .then((music: any) => {
        this.music = music;
      })
      .catch((error: any) => console.log(error));
  }

}
