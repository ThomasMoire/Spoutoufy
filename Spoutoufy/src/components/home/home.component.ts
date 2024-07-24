import { Component, inject, OnInit } from '@angular/core';
import { Music } from '../../interfaces/Music';
import { APIService } from '../../services/API/api.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MusicCardComponent } from '../music-card/music-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, AsyncPipe, MusicCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  text: string = "";
  private api = inject(APIService);
  

  router = inject(Router);

  onSubmit() {
    this.router.navigate((['musics', this.text]));
  }

  music: Music[] = [];
  randomMusics: Music[] = [];

  private index1: number = 0;
  private index2: number = 0;
  private index3: number = 0;

  ngOnInit(): void {
    this.api.getMusics().subscribe((musics) => {
      this.music = musics;
      if(this.music.length > 3) {
        this.index1 = Math.round(Math.random() * (musics.length - 1));
      do { this.index2 = Math.round(Math.random() * (musics.length - 1)) }
      while (this.index1 == this.index2);
      do { this.index3 = Math.round(Math.random() * (musics.length - 1)) }
      while ((this.index3 == this.index2) || (this.index3 == this.index1));
      this.randomMusics.push(musics[this.index1], musics[this.index2], musics[this.index3]);
      }
    })
  }
}