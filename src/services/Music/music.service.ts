import { Injectable } from "@angular/core";
import { Music } from "../../interfaces/Music";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Album } from "../../interfaces/Album";


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private musics: Music[] = [];
  private playlists: { [name: string]: Music[] } = {};
  private likedMusicsSubject = new BehaviorSubject<Music[]>([]);
  likedMusics$ = this.likedMusicsSubject.asObservable();

  constructor(private http: HttpClient) {}

  public getMusicById(musicId: number): Observable<Music> {
    return this.http.get<Music>(`http://localhost:3030/music/${musicId}`).pipe(
      catchError(this.handleError)
    );
  }

  public getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>('http://localhost:3030/musics').pipe(
      catchError(this.handleError)
    );
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:3030/albums').pipe(
      catchError(this.handleError)
    );
  }

  public getMusicsByAlbum(id: number): Observable<Music[]> {
    return this.http.get<Music[]>(`http://localhost:3030/albums/${id}/musics`).pipe(
      catchError(this.handleError)
    );
  }

  public searchedMusics(text: string): Observable<Music[]> {
    return this.http.get<Music[]>(`http://localhost:3030/musics/search/${text}`).pipe(
      catchError(this.handleError)
    );
  }

  public uploadMusic(formData: FormData): Observable<{ url: string }> {
    return this.http.post<{ url: string }>('http://localhost:3008/upload', formData).pipe(
      catchError(this.handleError)
    );
  }

  public deleteMusic(music: Music): Observable<any> {
    return this.http.delete(`http://localhost:3030/music/${music.id}`, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(music)
    }).pipe(
      catchError(this.handleError)
    );
  }

  public likeMusic(music: Music) {
    music.liked = !music.liked;
    this.updateLikedMusics();
  }

  private updateLikedMusics() {
    const likedMusics = this.musics.filter(m => m.liked);
    this.likedMusicsSubject.next(likedMusics);
  }

  public addToPlaylist(music: Music, playlistName: string) {
    if (!this.playlists[playlistName]) {
      this.playlists[playlistName] = [];
    }
    this.playlists[playlistName].push(music);
  }

  public getPlaylists() {
    return this.playlists;
  }

  public createPlaylist(name: string) {
    if (!this.playlists[name]) {
      this.playlists[name] = [];
    }
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
