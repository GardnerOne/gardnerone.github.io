let seed;
let isNewGame = true;

function setup() {
    init();
    createCanvas(windowWidth, windowHeight);

    noLoop();
}

function draw() {
    background(dark);
}

function keyPressed() {
    // Space Key
    switch (keyCode) {
        case 32: // SPACE
            togglePlay();
            break;
        case 78: // N
            nextFrame();
            break;
        case 81: // Q
            reset(true);
            break;
        case 82: // R
            reset();
            break;
        default:
            break;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Helpers
/**
 * Initialise the animation.
 *
 * For new games, print the animation controls.
 * */
function init() {
    if (isNewGame) {
        console.clear();
        seed = random(Number.MAX_SAFE_INTEGER);

        print('Controls:');
        print('"SPACE" - Toggle Play/Pause');
        print('    "N" - Next frame (when paused)');
        print('    "R" - Reset world');
        print('    "Q" - New game');
    }
    randomSeed(seed)
}

/** Pause or resume the animation */
function togglePlay() {
    if (isLooping()) {
        noLoop();
        print('Paused');
    } else {
        loop();
        print('Resume')
    }
}


/** Move forward one frame at a time */
function nextFrame() {
    if (isLooping()) return;

    redraw();
    print('Next frame')
}

/**
 * Reset the game to its initial state.
 *
 * By hard resetting, the seed for the game will be refreshed, creating a new world.
 * @param {Boolean} hard Whether a new session should be created or not (default = false)
 */
function reset(hard = false) {
    isNewGame = hard;
    setup();
    redraw();
    hard ? print('New game') : print('Reset world');
}
