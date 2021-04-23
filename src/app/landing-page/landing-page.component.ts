import { NgModule, Component, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { SONGS } from '../mock-songs';
import { SongComponent } from '../song/song.component'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  filtersong = "";
  songs = SONGS;

  selectedSong?: Song;
  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
