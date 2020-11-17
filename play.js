let isItPlaying = false;
let btn1, btn2, btn3, btn4;

btn1 = document.querySelector("#p5series");
btn2 = document.querySelector("#p5retrograde");
btn3 = document.querySelector("#p5inverted");
btn4 = document.querySelector("#p5invret");

const s1 = (p5a) => {
  let playSeries;

  p5a.setup = () => {
    p5a.createCanvas(50, 50);
    p5a.background("rgba(0,0,0,0)");
    p5a.noStroke();
    p5a.fill(0);
  };

  playSynth1 = () => {
    playSeries = new p5.PolySynth();
    p5a.userStartAudio();
    let dur = 0.9;
    let time = -1;
    let vel = 0.5;
    for (let i = 0; i < seriesP5.length; i++) {
      playSeries.play(seriesP5[i], vel, (time += 1), dur);
    }
  };
};
let p5st = new p5(s1, document.getElementById("p5series"));

const s2 = (p5b) => {
  let playRetrograde;
  p5b.setup = () => {
    p5b.createCanvas(50, 50);
    p5b.background("rgba(0,0,0,0)");
    p5b.noStroke();
    p5b.fill(0);
  };

  playSynth2 = () => {
    playRetrograde = new p5.PolySynth();
    p5b.userStartAudio();
    let dur = 0.9;
    let time = -1;
    let vel = 0.5;
    for (let i = 0; i < invRetP5.length; i++) {
      playRetrograde.play(retrogradeP5[i], vel, (time += 1), dur);
    }
  };
};
let p5nd = new p5(s2, document.getElementById("p5retrograde"));

const s3 = (p5c) => {
  let playInverted;

  p5c.setup = () => {
    p5c.createCanvas(50, 50);
    p5c.background("rgba(0,0,0,0)");
    p5c.noStroke();
    p5c.fill(0);
  };

  playSynth3 = () => {
    playInverted = new p5.PolySynth();
    p5c.userStartAudio();
    let dur = 0.9;
    let time = -1;
    let vel = 0.5;
    for (let i = 0; i < invertedP5.length; i++) {
      playInverted.play(invertedP5[i], vel, (time += 1), dur);
    }
  };
  //   p5c.mousePressed = () => {};
};
let p5rd = new p5(s3, document.getElementById("p5inverted"));

const s4 = (p5d) => {
  let playInvRet;

  p5d.setup = () => {
    p5d.createCanvas(50, 50);
    p5d.background("rgba(0,0,0,0)");
    p5d.noStroke();
    p5d.fill(0);
  };

  playSynth4 = () => {
    playInvRet = new p5.PolySynth();
    p5d.userStartAudio();
    let dur = 0.9;
    let time = -1;
    let vel = 0.5;
    for (let i = 0; i < invRetP5.length; i++) {
      playInvRet.play(invRetP5[i], vel, (time += 1), dur);
    }
  };
};
let p5th = new p5(s4, document.getElementById("p5invret"));

btn1.addEventListener("click", () => {
  if (isItPlaying === true) {
    setPlayBtnClass();
  } else if (seriesP5.length > 0) {
    document.getElementById("p5series").className = "stopBtn";
    document.getElementById("p5retrograde").className = "stopBtn";
    document.getElementById("p5inverted").className = "stopBtn";
    document.getElementById("p5invret").className = "stopBtn";

    this.playSynth1();
    isItPlaying = true;
    setTimeout(setPlayBtnClass, 12000);
  }
});

btn2.addEventListener("click", () => {
  if (isItPlaying === true) {
    setPlayBtnClass();
  } else if (retrogradeP5.length > 0) {
    document.getElementById("p5series").className = "stopBtn";
    document.getElementById("p5retrograde").className = "stopBtn";
    document.getElementById("p5inverted").className = "stopBtn";
    document.getElementById("p5invret").className = "stopBtn";
    this.playSynth2();
    isItPlaying = true;
    setTimeout(setPlayBtnClass, 12000);
  }
});

btn3.addEventListener("click", () => {
  if (isItPlaying === true) {
    setPlayBtnClass();
  } else if (invertedP5.length > 0) {
    document.getElementById("p5series").className = "stopBtn";
    document.getElementById("p5retrograde").className = "stopBtn";
    document.getElementById("p5inverted").className = "stopBtn";
    document.getElementById("p5invret").className = "stopBtn";

    this.playSynth3();
    isItPlaying = true;
    setTimeout(setPlayBtnClass, 12000);
  }
});

btn4.addEventListener("click", () => {
  if (isItPlaying === true) {
    setPlayBtnClass();
  } else if (invRetP5.length > 0) {
    document.getElementById("p5series").className = "stopBtn";
    document.getElementById("p5retrograde").className = "stopBtn";
    document.getElementById("p5inverted").className = "stopBtn";
    document.getElementById("p5invret").className = "stopBtn";

    this.playSynth4();
    isItPlaying = true;
    setTimeout(setPlayBtnClass, 12000);
  }
});

setPlayBtnClass = () => {
  document.getElementById("p5series").className = "playBtn";
  document.getElementById("p5retrograde").className = "playBtn";
  document.getElementById("p5inverted").className = "playBtn";
  document.getElementById("p5invret").className = "playBtn";

  isItPlaying = false;
};
