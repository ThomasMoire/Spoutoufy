// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { MusicService } from '../services/Music/music.service';  // Importez le service si nécessaire
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent // Assurez-vous que le composant est déclaré ici
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MusicService], // Ajoutez le service ici si nécessaire
  bootstrap: [AppComponent]
})
export class AppModule { }
