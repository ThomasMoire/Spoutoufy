import { Component, inject, Input, OnInit } from '@angular/core';
import { Music } from '../../interfaces/Music';
import { MusicService } from '../../services/Music/music.service';
import { Router, RouterLink } from '@angular/router';
import { MusicsComponent } from '../musics/musics.component';
import { MusicCardComponent } from '../music-card/music-card.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MusicCardComponent, FileUploadComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  musics: Music[] = [];
  private api = inject(MusicService);
  private musicService = inject(MusicService);
  private router = inject(Router);
  isDeleteButtonVisible: boolean = false;
  private dialog = inject(MatDialog);

  constructor() {}
  
  ngOnInit() {
    this.checkRoute(this.router.url);
    this.loadMusics();
  }

  checkRoute(url: string) {
    this.isDeleteButtonVisible = url.includes('/login');
  }

  loadMusics() {
    this.api.getMusics().subscribe((musics: Music[])=> {
      this.musics = musics;
    })
  }
  confirmDelete(music: Music) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        this.deleteMusic(music);
      }
    });
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
      this.loadMusics();
    } catch (error) {
      console.error('Erreur:', error);
    }
  }
    
  trackByMusicId(index: number, music: Music): number {
    return music.id;
  }
}