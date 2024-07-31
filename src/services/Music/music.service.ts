import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Music } from '../../interfaces/Music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private musics: Music[] = [];
  private playlists: { [name: string]: Music[] } = {};
  private likedMusicsSubject = new Observable<Music[]>();
  

  constructor(private http: HttpClient) {}
  public async getMusicById(musicId: number) : Promise<Music> {
    return fetch(`http://localhost:3030/music/${musicId}`)
      .then((res) => res.json());
  }
  public getMusics(): Observable<{ name: string, url: string }[]> {
    return this.http.get<{ name: string, author: string, url: string }[]>('http://localhost:3030/musics');
  }
  uploadMusic(formData: FormData): Observable<{ url: string }> {
    return this.http.post<{ url: string }>('http://localhost:3008/upload', formData);
  }
  deleteMusic(music: Music) {
    return fetch(`http://localhost:3030/music/${music.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(music) 
      }).then((res) => res.json());
  }
  likeMusic(music: Music) {
    music.liked = !music.liked;
    this.updateLikedMusics();
  }

  updateLikedMusics() {
    const likedMusics = this.musics.filter(music => music.liked);
    // this.likedMusicsSubject.next(likedMusics);
  }

  addToPlaylist(music: Music, playlistName: string) {
    if (!this.playlists[playlistName]) {
      this.playlists[playlistName] = [];
    }
    this.playlists[playlistName].push(music);
  }

  getPlaylists() {
    return this.playlists;
  }

  createPlaylist(name: string) {
    if (!this.playlists[name]) {
      this.playlists[name] = [];
    }
  }
}
