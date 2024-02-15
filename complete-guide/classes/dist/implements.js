"use strict";
/**
 * You can use an implements clause to check that a class satisfies a particular interface.
 *  An error will be issued if a class fails to correctly implement it:
 */
class InstagraX {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YoutuX {
    constructor(cameraMode, filter, burst, views) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.views = views;
    }
    createShorts() { }
}
