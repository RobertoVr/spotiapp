import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//operador
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Soitify service ready')
  }
  getQuery = (query: string) =>{

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBjdw3CwLIwOT8ECNqRW1jro5ElDYpH4cjnUgJ8OE8Czpo8ITtEllHPKCfGjYXnbDfywEXs3tg9dgkSsQ'
    });

    return this.http.get(url, { headers })
  }

  getNewReleases= () => {
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( (data) => data['albums'].items));
  }

  getArtistas = (termino: string) => {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));
  }

  getArtista = (id: string) => {
    return this.getQuery(`artists/${id}`);
                //.pipe( map( data => data['artists'].items));
  }

  getTopTracks = (id: string) => {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));
  }

}
