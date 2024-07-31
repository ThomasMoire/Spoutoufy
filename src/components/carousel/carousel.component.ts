import { Component, inject, Input, OnInit } from '@angular/core';
import { Music } from '../../interfaces/Music';
import { MusicsComponent } from '../musics/musics.component';
import { MusicCardComponent } from '../music-card/music-card.component';
import { APIService } from '../../services/API/api.service';

@Component({
  selector: 'app-carousel',
  imports: [MusicsComponent, MusicCardComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
})
export class CarouselComponent implements OnInit {
  private api = inject(APIService);
  @Input() musics: Music[] = [];
  visibleMusics: Music[] = [];
  currentIndex = 0;

  ngOnInit() {
    this.api.getMusics().subscribe((musics: Music[]) => {
      this.musics = musics;
      this.visibleMusics = this.musics.slice(0, 3); // Display the first 3 musics initially
    });
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = Math.max(0, this.musics.length - 3);
    }
    this.updateVisibleMusics();
  }

  nextSlide() {
    if (this.currentIndex < this.musics.length - 3) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleMusics();
  }

  updateVisibleMusics() {
    this.visibleMusics = this.musics.slice(this.currentIndex, this.currentIndex + 3);
  }

  trackByMusicId(index: number, music: Music): number {
    return music.id;
  }
}