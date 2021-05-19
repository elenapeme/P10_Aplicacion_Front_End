import { NgModule, Component, OnInit } from '@angular/core';

import { Song } from '../interfaces/song';
import { SONGS } from '../mock-songs';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  filtersong = "";
  songs = SONGS;
  status: boolean = false;

  selectedSong?: Song;
  onSelect(song: Song): void {
    this.selectedSong = song;
    this.status = !this.status;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
