import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Music } from '../../interfaces/Music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  deleteMusic(music: Music) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http: HttpClient) {}

  public async getMusicById(musicId: number) : Promise<Music> {
    return fetch(`http://localhost:3030/musics/${musicId}`)
      .then((res) => res.json());
  }
  public getMusics(): Observable<{ name: string, url: string }[]> {
    return this.http.get<{ name: string, url: string }[]>('http://localhost:3030/musics');
  }

  uploadMusic(formData: FormData): Observable<{ url: string }> {
    return this.http.post<{ url: string }>('http://localhost:3008/upload', formData);
  }
}
