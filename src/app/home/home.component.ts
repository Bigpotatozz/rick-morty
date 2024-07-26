import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CardComponent } from "../card/card.component";
import { RickAndMortyService } from '../services/rickAndMortyAPI/rick-and-morty.service';
import { RickAndMortyCharacter, RickAndMortyResponse } from '../interfaces/rickAndMorty.interface';
import { error } from 'console';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardComponent,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private serviceRickAndMorty: RickAndMortyService){}


  personaje!: RickAndMortyCharacter[];

  

  ngOnInit(): void {

    this.serviceRickAndMorty.getCharacters().subscribe({
      next: (character: RickAndMortyResponse) => {
        this.personaje = character.results;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })

    console.log(this.personaje);

    
    
  }

  

}
