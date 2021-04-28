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


  audio;
  isPlaying = false;
  activeSong;
  currentTime;
  durationTime: string;

  constructor() { }

  
  ngOnInit(): void {
    this.formatSong();
    this.audio.addEventListener('loadedmetadata', (e) => {
      const durationInMinutes = this.generateMinutes(this.audio.duration);
      const durationInSeconds = this.generateSeconds(this.audio.duration);
      this.durationTime = this.generateTimeToDisplay(durationInMinutes, durationInSeconds);

    });
  }

  formatSong(){
    this.audio = new Audio();
    this.audio.src = this.song.url;
    this.audio.load();
  }
  // function to play the chosen song
  playSong(song): void {

    //Interval to watch the change of duration of the song
    setInterval(() => {
      const currentMinutes = this.generateMinutes(this.audio.currentTime);
      const currentSeconds = this.generateSeconds(this.audio.currentTime);
      this.currentTime$.next(this.generateTimeToDisplay(currentMinutes, currentSeconds)); 
      
      
      const percents = this.generatePercentage(this.audio.currentTime, this.audio.duration);
      if (!isNaN(percents)) {
        this.currentProgress$.next(percents);
      }
    },50)
    //first time playing it will begin from the beginning, if not it will continue
    if (this.isPlaying){
      this.audio.currentTime = this.currentTime;
      this.audio.play();
    } else { 
      this.isPlaying = true;
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

  // Generate minutes from audio time
  generateMinutes(currentTime: number): number {
    return Math.floor(currentTime / 60);
  }

  // Generate seconds from audio time
  generateSeconds(currentTime: number): number | string {
    const secsFormula = Math.floor(currentTime % 60);
    return secsFormula < 10 ? '0' + String(secsFormula) : secsFormula;
  }

  generateTimeToDisplay(currentMinutes, currentSeconds): string {
    return `${currentMinutes}:${currentSeconds}`;
  }

  // Generate percentage of current song
  generatePercentage(currentTime: number, duration: number): number {
    return Math.round((currentTime / duration) * 100);
  }


}
