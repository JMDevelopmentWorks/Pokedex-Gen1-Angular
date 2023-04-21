import { Component, OnInit } from '@angular/core';

//Service
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any
  public getAllPokemons : any = []
  public apiError: boolean = false
  public initialItems: number = 10
  public itemsToAdd: number = 10
  public displayItems = this.initialItems

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (res) => {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      },
      error: (err) => {
        this.apiError = true
      }
    })
  }

  public handleMorePokemon() {

  }

  public getPokemonSearch(value: string){
    
    const pokeFilter = this.setAllPokemons.filter( (res : any) => {
      return !res.name.indexOf(value.toLocaleLowerCase())
    })

    this.getAllPokemons = pokeFilter
    
  }

 public handleLoadMore() {
    this.displayItems += this.itemsToAdd;
  }
}
