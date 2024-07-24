import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../interfaces/Album';
import { Music } from '../../interfaces/Music';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  public async getMusicById(musicId: number) : Promise<Music> {
    return fetch("http://localhost:3030/musics/" + musicId)
      .then((res) => res.json());
  }
  searchedMusics(text: string) {
    return this.http.get<Music[]>('http://localhost:3030/musics/search/' + text);
  }

  constructor(private http: HttpClient) { }

  public getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>('http://localhost:3030/musics');
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:3030/albums');
  }

  public getMusicsByAlbum(id: number): Observable<Music[]> {
    return this.http.get<Music[]>(`http://localhost:3030/albums/${id}/musics`);
  }
}
