import { Component, OnInit } from '@angular/core';
import { Garagem } from 'src/app/garagem/garagem';
import { GaragemService } from 'src/app/garagem/garagem.service';

@Component({
  selector: 'app-garagem-list',
  templateUrl: './garagem-list.component.html',
  styleUrls: ['./garagem-list.component.css']
})
export class GaragemListComponent implements OnInit {

  //Declarações de variaveis
  garagens: Garagem[];
  arrayVazio: boolean;
  titulo: string = "Lista de Garagens";
  constructor(private garagemService: GaragemService) { }

  ngOnInit() {
    this.garagemService.findAll()
      .subscribe(garagens => {
        this.garagens = garagens
        this.tabelaVazia(this.garagens.length);
      });
  }

  onDelete(id: number) {
    this.garagemService.deleteById(id)
      .subscribe(() => {
        //Remove a garagem da lista
        this.garagens = this.garagens.filter(garagem => garagem.id !== id);
        this.tabelaVazia(this.garagens.length);
      });
  }

  tabelaVazia(arrayLength: number) {
    if (arrayLength == 0) {
      this.arrayVazio = true;
    } else {
      this.arrayVazio = false;
    }
  }
}
