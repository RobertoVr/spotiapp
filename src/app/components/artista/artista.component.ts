import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista   : any = {};
  topTracks : any[] = []; 
  visible   : boolean;

  constructor(private activatedRoute:ActivatedRoute, private spotify:SpotifyService) {
    
    this.visible = true;

    activatedRoute.params.subscribe(data => {
      this.getArtista(data['id']);
      this.getTopTracks(data['id']);
    })
    
   }

  getArtista = (id: string) =>{
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.visible = false;
    })
  }

  getTopTracks = (id:string) => {
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      this.topTracks = topTracks;
    })
  }

}
