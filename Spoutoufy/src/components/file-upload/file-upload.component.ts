import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MusicService } from '../../services/Music/music.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [MusicService]
})
export class FileUploadComponent implements OnInit {
  audioUrl: string | undefined;
  selectedFile: File | null = null;
  musics: any[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.loadMusics();
  }

  loadMusics(): void {
    this.musicService.getMusics().subscribe(musics => {
      this.musics = musics;
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      const titleInput = document.getElementById('title') as HTMLInputElement;
      const authorInput = document.getElementById('author') as HTMLInputElement;

      formData.append('title', titleInput.value);
      formData.append('author', authorInput.value);
      formData.append('audio', this.selectedFile);

      this.musicService.uploadMusic(formData).subscribe((response => {
        this.audioUrl = response.url;
        this.loadMusics(); // Recharger les musiques après l'upload
      }));
    }
  }
}
