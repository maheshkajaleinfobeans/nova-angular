import { Component, OnInit } from '@angular/core';

import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.css'],
  providers: [HomepageService]
})
export class TopAlbumsComponent implements OnInit {

constructor(private homepageService: HomepageService) { }

  ngOnInit() {
  this.homepageService.getTopAlbum();
  }

}
