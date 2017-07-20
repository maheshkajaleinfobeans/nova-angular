import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-top-singles',
  templateUrl: './top-singles.component.html',
  styleUrls: ['./top-singles.component.css'],
  providers: [HomepageService]
})
export class TopSinglesComponent implements OnInit {

  constructor(private homepageService: HomepageService) { }

  ngOnInit() {
  	this.homepageService.getSingleAlbum();
  }

}
