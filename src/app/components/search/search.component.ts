import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas    : any[] = [];
  loading     : boolean;

  constructor( private _spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar = (termino: string) => {
    this.loading = true;
    this._spotify.getArtistas(termino)
        .subscribe( (data: any) =>{
          this.artistas = data;
          this.loading = false;
        })
  }

}
