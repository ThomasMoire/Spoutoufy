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
  newMusics: Music[] = [];

  constructor(private API: APIService) { }
  loadMusics() {
    this.API.getMusics().subscribe((musics: Music[])=> {
      this.musics = musics;
    })
  }
  async deleteMusic(music: Music) {
    try {
      const response = await fetch(`http://localhost:3030/music/${music.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression');
      }

      // Rechargez les musiques après la suppression
      await this.loadMusics();
    } catch (error) {
      console.error('Erreur:', error);
    }
  }
}
