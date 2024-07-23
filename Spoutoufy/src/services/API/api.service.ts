import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../interfaces/Album';
import { Music } from '../../interfaces/Music';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  getMusicById(musicId: number) : Promise<Music> {
    throw new Error('Method not implemented.');
  }
  searchedMusics(text: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>('http://localhost:8080/musics');
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:8080/albums');
  }

  public getMusicsByAlbum(id: number): Observable<Music[]> {
    return this.http.get<Music[]>(`http://localhost:8080/albums/${id}/musics`);
  }
}
