import { NgModule, Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { Song } from '../interfaces/song';
import { SONGS } from '../mock-songs';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('songs').valueChanges();
  }
  filtersong = '';
  status = false;

  selectedSong?: Song;
  onSelect(song: Song): void {
    this.selectedSong = song;
    this.status = !this.status;
  }

  ngOnInit(): void {
  }

}
