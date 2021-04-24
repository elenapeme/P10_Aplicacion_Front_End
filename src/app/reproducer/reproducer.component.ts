import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SONGS } from '../mock-songs';

@Component({
  selector: 'app-reproducer',
  templateUrl: './reproducer.component.html',
  styleUrls: ['./reproducer.component.css']
})
export class ReproducerComponent implements OnInit {

  // Data received from the parent component
  @Input() song;

  // state of the song to update the valors of the component
  currentProgress$ = new BehaviorSubject(0);
  currentTime$ = new Subject();

  audio = new Audio();
  isPlaying = false;
  activeSong;
  durationTime: string;
  currentTime;

  constructor() { }

  ngOnInit(): void {
  }

  // function to play the chosen song
  playSong(song): void {
    //first time playi,g it will begin from the beginning, if not it will continue
    if (this.isPlaying){
      this.audio.currentTime = this.currentTime;
      this.audio.play();
    } else {
      this.durationTime = undefined;
      this.isPlaying = true;
      this.audio.src = song.url;
      this.audio.load();
      this.audio.play();
    }
  }

  pauseSong(): void {
    this.audio.pause();
    this.currentTime = this.audio.currentTime;
  }

  stopSong(): void {
    this.isPlaying = false;
    this.audio.pause();
    this.audio.currentTime = 0;
  }

}
