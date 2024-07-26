import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { RickAndMortyCharacter, RickAndMortyResponse } from '../../interfaces/rickAndMorty.interface';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  url: string = 'https://rickandmortyapi.com/api/character/?page=19';

  getCharacters(): Observable<RickAndMortyResponse> {  
    
    return this.http.get<RickAndMortyResponse>(this.url).pipe(
      catchError((error) => {
        console.error('Error:', error);
        throw error
      })
    );
  }
}
