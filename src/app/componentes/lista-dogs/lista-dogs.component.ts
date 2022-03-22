import { ServiceDogService } from './../../service/service-dog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-dogs',
  templateUrl: './lista-dogs.component.html',
  styleUrls: ['./lista-dogs.component.scss']
})
export class ListaDogsComponent implements OnInit {

  public dogs: Array<any> | undefined;
  public imgDog: Array<any> | undefined
  

  constructor(public dogService: ServiceDogService, public route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.ListDog();

  }

  ListDog (){
    this.dogService
    .getListDog()
    .subscribe(
      (response) => {
        const responseStr = JSON.stringify(response.message);
        const responseParse = JSON.parse(responseStr);

        this.dogs = Object.keys(responseParse);
        //console.log(this.dogs);
      }
    )
  }
}
