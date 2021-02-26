let simpleSeries = [];
let simpleRetrograde = [];
let simpleInverted = [];
let simpleInvRet = [];

let series = [];
let retrograde = [];
let inverted = [];
let invRet = [];

export let seriesP5 = [];
export let retrogradeP5 = [];
export let invertedP5 = [];
export let invRetP5 = [];

let seriesVex = [];
let retrogradeVex = [];
let invertedVex = [];
let invRetVex = [];

const notes = [
  ' C',
  ' C#',
  ' D',
  ' Eb',
  ' E',
  ' F',
  ' F#',
  ' G',
  ' G#',
  ' A',
  ' Bb',
  ' B',
];
const notesP5 = [
  'C4',
  'C#4',
  'D4',
  'D#4',
  'E4',
  'F4',
  'F#4',
  'G4',
  'G#4',
  'A5',
  'A#5',
  'B5',
];

let intervals = [];

import { sequences } from './sequences.js';

function generateSeries() {
  let newNote = Math.floor(Math.random() * 12) + 1;
  let lastNote;
  let lastInvNote;
  let diff;
  let invNote;

  simpleSeries.push(newNote);
  series.push(notes[newNote - 1]);
  seriesP5.push(notesP5[newNote - 1]);
  seriesVex.push(notesVex[newNote - 1]);

  simpleRetrograde.unshift(newNote);
  retrograde.unshift(notes[newNote - 1]);
  retrogradeP5.unshift(notesP5[newNote - 1]);
  retrogradeVex.unshift(notesVex[newNote - 1]);

  simpleInverted.push(newNote);
  inverted.push(notes[newNote - 1]);
  invertedP5.push(notesP5[newNote - 1]);
  invertedVex.push(notesVex[newNote - 1]);

  simpleInvRet.unshift(newNote);
  invRet.unshift(notes[newNote - 1]);
  invRetP5.unshift(notesP5[newNote - 1]);
  invRetVex.unshift(notesVex[newNote - 1]);

  while (simpleSeries.length < 12) {
    newNote = Math.floor(Math.random() * 12) + 1;
    lastNote = simpleSeries[simpleSeries.length - 1];
    lastInvNote = simpleInverted[simpleInverted.length - 1];
    diff = newNote - lastNote;
    invNote = lastInvNote - diff;
    if (invNote > 12) {
      invNote -= 12;
    } else if (invNote <= 0) {
      invNote += 12;
    }

    if (
      !simpleSeries.includes(newNote) /*&& !intervals.includes(Math.abs(diff))*/
    ) {
      simpleSeries.push(newNote);
      series.push(notes[newNote - 1]);
      seriesP5.push(notesP5[newNote - 1]);
      seriesVex.push(notesVex[newNote - 1]);

      simpleRetrograde.unshift(newNote);
      retrograde.unshift(notes[newNote - 1]);
      retrogradeP5.unshift(notesP5[newNote - 1]);
      retrogradeVex.unshift(notesVex[newNote - 1]);

      simpleInverted.push(invNote);
      inverted.push(notes[invNote - 1]);
      invertedP5.push(notesP5[invNote - 1]);
      invertedVex.push(notesVex[invNote - 1]);

      simpleInvRet.unshift(invNote);
      invRet.unshift(notes[invNote - 1]);
      invRetP5.unshift(notesP5[invNote - 1]);
      invRetVex.unshift(notesVex[invNote - 1]);

      intervals.push(Math.abs(diff));
    } else {
    }
  }
}

function generateAllIntervalsSeries() {
  let drawnSeq = sequences[Math.floor(Math.random() * sequences.length)];
  for (let i = 0; i < 12; i++) {
    simpleSeries.push(drawnSeq[i]);
    series.push(notes[drawnSeq[i] - 1]);
    seriesP5.push(notesP5[drawnSeq[i] - 1]);
    seriesVex.push(notesVex[drawnSeq[i] - 1]);

    simpleRetrograde.unshift(drawnSeq[i]);
    retrograde.unshift(notes[drawnSeq[i] - 1]);
    retrogradeP5.unshift(notesP5[drawnSeq[i] - 1]);
    retrogradeVex.unshift(notesVex[drawnSeq[i] - 1]);

    simpleInverted.push(13 - drawnSeq[i]);
  }
  let diff = drawnSeq[0] - simpleInverted[0];

  for (let i = 0; i < 12; i++) {
    simpleInverted[i] += diff;
    if (simpleInverted[i] > 12) {
      simpleInverted[i] -= 12;
    } else if (simpleInverted[i] <= 0) {
      simpleInverted[i] += 12;
    }
    inverted.push(notes[simpleInverted[i] - 1]);
    invertedP5.push(notesP5[simpleInverted[i] - 1]);
    invertedVex.push(notesVex[simpleInverted[i] - 1]);

    simpleInvRet.unshift(simpleInverted[i]);
    invRet.unshift(notes[simpleInverted[i] - 1]);
    invRetP5.unshift(notesP5[simpleInverted[i] - 1]);
    invRetVex.unshift(notesVex[simpleInverted[i] - 1]);
  }
}

function writeSeries() {
  document.getElementById('series').innerHTML = series;
  document.getElementById('retrograde').innerHTML = retrograde;
  document.getElementById('inverted').innerHTML = inverted;
  document.getElementById('invRet').innerHTML = invRet;
}
function clearArrays() {
  series = [];
  retrograde = [];
  inverted = [];
  invRet = [];

  simpleSeries = [];
  simpleRetrograde = [];
  simpleInverted = [];
  simpleInvRet = [];

  seriesP5 = [];
  retrogradeP5 = [];
  invertedP5 = [];
  invRetP5 = [];

  seriesVex = [];
  retrogradeVex = [];
  invertedVex = [];
  invRetVex = [];
}

let staveWidth, voiceWidth;
let wrapperWidth = document.getElementById('wrapper').offsetWidth;
if (window.innerWidth < 350) {
  staveWidth = wrapperWidth * 2;
  voiceWidth = staveWidth * 0.95;
} else if (window.innerWidth < 640) {
  staveWidth = wrapperWidth * 1.5;
  voiceWidth = staveWidth * 0.95;
} else if (window.innerWidth <= 1024) {
  staveWidth = wrapperWidth * 0.9;
  voiceWidth = staveWidth * 0.95;
} else {
  staveWidth = wrapperWidth * 0.7;
  voiceWidth = staveWidth * 0.96;
}
window.addEventListener('resize', refreshStaves);
window.addEventListener('orientationchange', refreshStaves);

function refreshStaves() {
  clearStaves();

  wrapperWidth = document.getElementById('wrapper').offsetWidth;
  if (window.innerWidth < 350) {
    staveWidth = wrapperWidth * 2;
    voiceWidth = staveWidth * 0.95;
  } else if (window.innerWidth < 640) {
    staveWidth = wrapperWidth * 1.5;
    voiceWidth = staveWidth * 0.95;
  } else if (window.innerWidth <= 1024) {
    staveWidth = wrapperWidth * 0.9;
    voiceWidth = staveWidth * 0.95;
  } else {
    staveWidth = wrapperWidth * 0.7;
    voiceWidth = staveWidth * 0.96;
  }

  let div1 = document.getElementById('score1');
  let div2 = document.getElementById('score2');
  let div3 = document.getElementById('score3');
  let div4 = document.getElementById('score4');

  let renderer1 = new VF.Renderer(div1, VF.Renderer.Backends.SVG);
  let renderer2 = new VF.Renderer(div2, VF.Renderer.Backends.SVG);
  let renderer3 = new VF.Renderer(div3, VF.Renderer.Backends.SVG);
  let renderer4 = new VF.Renderer(div4, VF.Renderer.Backends.SVG);

  renderer1.resize(staveWidth, 115);
  renderer2.resize(staveWidth, 115);
  renderer3.resize(staveWidth, 115);
  renderer4.resize(staveWidth, 115);

  let context1 = renderer1.getContext();
  let context2 = renderer2.getContext();
  let context3 = renderer3.getContext();
  let context4 = renderer4.getContext();

  let stave1 = new VF.Stave(0, 0, staveWidth);
  stave1.addClef('treble');
  stave1.setContext(context1).draw();

  let stave2 = new VF.Stave(0, 0, staveWidth);
  stave2.addClef('treble');
  stave2.setContext(context2).draw();

  let stave3 = new VF.Stave(0, 0, staveWidth);
  stave3.addClef('treble');
  stave3.setContext(context3).draw();

  let stave4 = new VF.Stave(0, 0, staveWidth);
  stave4.addClef('treble');
  stave4.setContext(context4).draw();

  let notes1 = [];
  for (let i = 0; i < 12; i++) {
    notes1.push(notesVex[simpleSeries[i] - 1]);
  }
  let voice1 = new VF.Voice({ num_beats: 12, beat_value: 1 });
  voice1.addTickables(notes1);
  let formatter1 = new VF.Formatter()
    .joinVoices([voice1])
    .format([voice1], voiceWidth);
  voice1.draw(context1, stave1);

  let notes2 = [];
  for (let i = 0; i < 12; i++) {
    notes2.push(notesVex[simpleRetrograde[i] - 1]);
  }
  let voice2 = new VF.Voice({ num_beats: 12, beat_value: 1 });
  voice2.addTickables(notes2);
  let formatter2 = new VF.Formatter()
    .joinVoices([voice2])
    .format([voice2], voiceWidth);
  voice2.draw(context2, stave2);

  let notes3 = [];
  for (let i = 0; i < 12; i++) {
    notes3.push(notesVex[simpleInverted[i] - 1]);
  }
  let voice3 = new VF.Voice({ num_beats: 12, beat_value: 1 });
  voice3.addTickables(notes3);
  let formatter3 = new VF.Formatter()
    .joinVoices([voice3])
    .format([voice3], voiceWidth);
  voice3.draw(context3, stave3);

  let notes4 = [];
  for (let i = 0; i < 12; i++) {
    notes4.push(notesVex[simpleInvRet[i] - 1]);
  }
  let voice4 = new VF.Voice({ num_beats: 12, beat_value: 1 });
  voice4.addTickables(notes4);
  let formatter4 = new VF.Formatter()
    .joinVoices([voice4])
    .format([voice4], voiceWidth);
  voice4.draw(context4, stave4);
}
let VF = Vex.Flow;

const notesVex = [
  new VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'w' }),
  new VF.StaveNote({
    clef: 'treble',
    keys: ['c#/4'],
    duration: 'w',
  }).addAccidental(0, new VF.Accidental('#')),
  new VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'w' }),
  new VF.StaveNote({
    clef: 'treble',
    keys: ['eb/4'],
    duration: 'w',
  }).addAccidental(0, new VF.Accidental('b')),
  new VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'w' }),
  new VF.StaveNote({ clef: 'treble', keys: ['f/4'], duration: 'w' }),
  new VF.StaveNote({
    clef: 'treble',
    keys: ['f#/4'],
    duration: 'w',
  }).addAccidental(0, new VF.Accidental('#')),
  new VF.StaveNote({ clef: 'treble', keys: ['g/4'], duration: 'w' }),
  new VF.StaveNote({
    clef: 'treble',
    keys: ['g#/4'],
    duration: 'w',
  }).addAccidental(0, new VF.Accidental('#')),
  new VF.StaveNote({ clef: 'treble', keys: ['a/4'], duration: 'w' }),
  new VF.StaveNote({
    clef: 'treble',
    keys: ['bb/4'],
    duration: 'w',
  }).addAccidental(0, new VF.Accidental('b')),
  new VF.StaveNote({ clef: 'treble', keys: ['b/4'], duration: 'w' }),
];

const div1 = document.getElementById('score1');
const div2 = document.getElementById('score2');
const div3 = document.getElementById('score3');
const div4 = document.getElementById('score4');

let renderer1 = new VF.Renderer(div1, VF.Renderer.Backends.SVG);
let renderer2 = new VF.Renderer(div2, VF.Renderer.Backends.SVG);
let renderer3 = new VF.Renderer(div3, VF.Renderer.Backends.SVG);
let renderer4 = new VF.Renderer(div4, VF.Renderer.Backends.SVG);

renderer1.resize(staveWidth, 115);
renderer2.resize(staveWidth, 115);
renderer3.resize(staveWidth, 115);
renderer4.resize(staveWidth, 115);

let context1 = renderer1.getContext();
let context2 = renderer2.getContext();
let context3 = renderer3.getContext();
let context4 = renderer4.getContext();

let stave1 = new VF.Stave(0, 0, staveWidth);
stave1.addClef('treble');
stave1.setContext(context1).draw();

let stave2 = new VF.Stave(0, 0, staveWidth);
stave2.addClef('treble');
stave2.setContext(context2).draw();

let stave3 = new VF.Stave(0, 0, staveWidth);
stave3.addClef('treble');
stave3.setContext(context3).draw();

let stave4 = new VF.Stave(0, 0, staveWidth);
stave4.addClef('treble');
stave4.setContext(context4).draw();

function vexFlowDraw() {
  clearStaves();

  let div1 = document.getElementById('score1');
  let div2 = document.getElementById('score2');
  let div3 = document.getElementById('score3');
  let div4 = document.getElementById('score4');

  let renderer1 = new VF.Renderer(div1, VF.Renderer.Backends.SVG);
  let renderer2 = new VF.Renderer(div2, VF.Renderer.Backends.SVG);
  let renderer3 = new VF.Renderer(div3, VF.Renderer.Backends.SVG);
  let renderer4 = new VF.Renderer(div4, VF.Renderer.Backends.SVG);

  renderer1.resize(staveWidth, 115);
  renderer2.resize(staveWidth, 115);
  renderer3.resize(staveWidth, 115);
  renderer4.resize(staveWidth, 115);

  let context1 = renderer1.getContext();
  let context2 = renderer2.getContext();
  let context3 = renderer3.getContext();
  let context4 = renderer4.getContext();

  let stave1 = new VF.Stave(0, 0, staveWidth);
  stave1.addClef('treble');
  stave1.setContext(context1).draw();

  let stave2 = new VF.Stave(0, 0, staveWidth);
  stave2.addClef('treble');
  stave2.setContext(context2).draw();

  let stave3 = new VF.Stave(0, 0, staveWidth);
  stave3.addClef('treble');
  stave3.setContext(context3).draw();

  let stave4 = new VF.Stave(0, 0, staveWidth);
  stave4.addClef('treble');
  stave4.setContext(context4).draw();

  let notes1 = [];
  for (let i = 0; i < 12; i++) {
    notes1.push(notesVex[simpleSeries[i] - 1]);
  }
  let voice1 = new VF.Voice({ num_beats: 12, beat_value: 1 });
  voice1.addTickables(notes1);
  let formatter1 = new VF.Formatter()
    .joinVoices([voice1])
    .format([voice1], voiceWidth);
  voice1.draw(context1, stave1);

  let notes2 = [];
  for (let i = 0; i < 12; i++) {
    notes2.push(notesVex[simpleRetrograde[i] - 1]);
  }
  let voice2 = new VF.Voice({ num_beats: 12, beat_value: 1 });
  voice2.addTickables(notes2);
  let formatter2 = new VF.Formatter()
    .joinVoices([voice2])
    .format([voice2], voiceWidth);
  voice2.draw(context2, stave2);

  let notes3 = [];
  for (let i = 0; i < 12; i++) {
    notes3.push(notesVex[simpleInverted[i] - 1]);
  }
  let voice3 = new VF.Voice({ num_beats: 12, beat_value: 1 });
  voice3.addTickables(notes3);
  let formatter3 = new VF.Formatter()
    .joinVoices([voice3])
    .format([voice3], voiceWidth);
  voice3.draw(context3, stave3);

  let notes4 = [];
  for (let i = 0; i < 12; i++) {
    notes4.push(notesVex[simpleInvRet[i] - 1]);
  }
  let voice4 = new VF.Voice({ num_beats: 12, beat_value: 1 });
  voice4.addTickables(notes4);
  let formatter4 = new VF.Formatter()
    .joinVoices([voice4])
    .format([voice4], voiceWidth);
  voice4.draw(context4, stave4);
}
const clearStaves = () => {
  document.getElementById('score1').innerHTML = '';
  document.getElementById('score2').innerHTML = '';
  document.getElementById('score3').innerHTML = '';
  document.getElementById('score4').innerHTML = '';
};
function generate() {
  if (document.getElementById('allintervals').checked) {
    clearArrays();
    generateAllIntervalsSeries();
    writeSeries();
    vexFlowDraw();
  } else {
    clearArrays();
    generateSeries();
    writeSeries();
    vexFlowDraw();
  }
}
let generateBtn = document.querySelector('#generator');
generateBtn.addEventListener('click', () => {
  generate();
});
