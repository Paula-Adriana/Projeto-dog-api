import { Img } from './../../models/img';
import { ServiceDogService } from 'src/app/service/service-dog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  
  dogObj: Img = new Img({});
  dogBreed: any;
  constructor(private route: ActivatedRoute, private dogService: ServiceDogService, private router: Router) { }

  ngOnInit(): void {
    let breed = this.route.snapshot.paramMap.get('breed');
    if (breed) {
      this.dogService
      .getImgDog(breed)
      .subscribe((Img) => {
        this.dogObj = Img;
        this.dogBreed = breed;
      });
    }
  }
 
  }


