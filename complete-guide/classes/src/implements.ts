/**
 * You can use an implements clause to check that a class satisfies a particular interface.
 *  An error will be issued if a class fails to correctly implement it:
 */

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class InstagraX implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
interface Shorts {
  createShorts(): void;
}

class YoutuX implements TakePhoto, Shorts {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public views: number
  ) {}

  createShorts(): void {}
}
