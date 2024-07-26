import { Component } from '@angular/core';
import { APIService } from '../../services/API/api.service';
import { Music } from '../../interfaces/Music';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  musics: Music[] = [];

  constructor(private API: APIService) { }
  deleteMusic(id: number): void {
    this.API.deleteMusic(id).subscribe(() => {
      this.musics = this.musics.filter(music => music.id !== id);
      console.log("Musique supprimée avec succès ${id}");
    });
  }
}
