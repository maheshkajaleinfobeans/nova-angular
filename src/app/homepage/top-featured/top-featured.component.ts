import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-top-featured',
  templateUrl: './top-featured.component.html',
  styleUrls: ['./top-featured.component.css'],
  providers: [HomepageService]
})
export class TopFeaturedComponent implements OnInit {

  constructor(private homepageService: HomepageService) { }

  ngOnInit() {
  	  this.homepageService.getFeaturedAlbum();
  }

}
