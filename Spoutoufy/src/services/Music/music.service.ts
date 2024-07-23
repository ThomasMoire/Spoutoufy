import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicService{
  constructor(private http: HttpClient) {}

  getMusics(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3030/musics');
  }

  uploadMusic(formData: FormData): Observable<{ url: string }> {
    return this.http.post<{ url: string }>('http://localhost:3008/upload', formData);
  }
}
