import { Component, inject, Input, OnInit } from '@angular/core';
import { Music } from '../../interfaces/Music';
import { APIService } from '../../services/API/api.service';
import { Router, RouterLink } from '@angular/router';
import { MusicCardComponent } from '../music-card/music-card.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { UpdateMusicComponent } from '../update-music/update-music.component';
import { MusicService } from '../../services/Music/music.service';
import { MusicsComponent } from '../musics/musics.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, MusicCardComponent, UpdateMusicComponent, FileUploadComponent, MusicsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
delete(arg0: any) {
throw new Error('Method not implemented.');
}

  musics: Music[] = [];
  music : Music | null = null;
  
  
  private api = inject(MusicService);
product: any;

  @Input() set musicId (musicId: number) {
    this.api.getMusicById(musicId)
      .then((music: any) => {
        this.music = music;
      })
      .catch((error: any) => console.log(error));
  }
  router = inject(Router);
  

  ngOnInit(): void {
    this.api.getMusics().subscribe((musics) => {
      this.musics = this.musics;
    })
  }
}
