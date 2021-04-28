import { SongFinishingPipe } from './song-finishing.pipe';

describe('SongFinishingPipe', () => {
  it('create an instance', () => {
    const pipe = new SongFinishingPipe();
    expect(pipe).toBeTruthy();
  });
});
