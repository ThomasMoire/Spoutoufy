import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MusicService } from '../../services/Music/music.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  selectedFile: File | null = null;
  fileUrl: string | null = null;
  musics: { name: string, url: string }[] = [];

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
    if (input.files && input.files.length > 0) {
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

      this.musicService.uploadMusic(formData).subscribe(response => {
        this.fileUrl = response.url;
        this.loadMusics(); 
        console.log(this.fileUrl); // Recharger les musiques après l'upload

        fetch('http://localhost:3030/upload',{
          method : "POST",
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({title : titleInput.value, author: authorInput.value,url : response.url,mime_type : this.selectedFile?.type})
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })

      });
    }
  }
}
