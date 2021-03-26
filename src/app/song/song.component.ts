import { Component, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  song: Song = {
    id: 1,
    title: "Smells Like Teen Spirit",
    author: "Nirvana",
    year: 1991,
    disc: "Nevermind",
    style: "rock",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
