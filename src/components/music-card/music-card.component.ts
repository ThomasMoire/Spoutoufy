import { Component, Input } from '@angular/core';
import { MusicsComponent } from '../musics/musics.component';
import { Music } from '../../interfaces/Music';
import { MusicService } from '../../services/Music/music.service';


@Component({
  selector: 'app-music-card',
  imports: [MusicsComponent,],
  standalone: true,
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css'],
})
export class MusicCardComponent {
  @Input() music: 
  { title: string, author: string, image?: string, url: string } = {
    title: '',
    author: '',
    image: 'https://picsum.photos/300/200', 
    url: ''
  };

  constructor(private musicService: MusicService) { }
  
  showPlaylistMenu: boolean = false;
  playlists: string[] = ['Playlist 1', 'Playlist 2', 'Playlist 3'];
  selectedPlaylists: string[] = [];

  likeMusic() {
    this.musicService.likeMusic;
    alert(`You liked: ${this.music.title}`);
  }

  togglePlaylistMenu() {
    this.showPlaylistMenu = !this.showPlaylistMenu;
}

  onPlaylistChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.selectedPlaylists.push(input.value);
    } else {
      this.selectedPlaylists = this.selectedPlaylists.filter(playlist => playlist !== input.value);
    }
  }
  
  addToPlaylist() {
    if (this.selectedPlaylists.length > 0) {
      alert(`Added to: ${this.selectedPlaylists.join(', ')}`);
    } else {
      alert('Please select a playlist.');
    }
    // this.closePlaylistOptions();
  }
}
