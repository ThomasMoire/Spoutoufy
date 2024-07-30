import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-menu',
  standalone: true,
  imports: [],
  templateUrl: './playlist-menu.component.html',
  styleUrl: './playlist-menu.component.css'
})
export class PlaylistMenuComponent {
  @Input() showMenu: boolean = false;
  playlists = []; // This should come from a service or parent component
  newPlaylistName: string = '';

  addToPlaylist(playlist: { name: any; }) {
      console.log(`Added to playlist: ${playlist.name}`);
      // Logic to add music to the playlist
  }

  createPlaylist() {
      if (this.newPlaylistName) {
          console.log(`Created new playlist: ${this.newPlaylistName}`);
          // Logic to create a new playlist
          // this.playlists.push({ name: this.newPlaylistName });
          this.newPlaylistName = '';
      }
  }
}
