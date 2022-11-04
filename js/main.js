const elements = [
  "html",
  "body",
  "head",
  "link",
  "meta",
  "marquee",
  "script",
  "style",
  "blogroll",
  "constructionsign",
  "guestbook",
  "webring"
];
const Els = [
  "!doctype html",
  "html",
  "base",
  "head",
  "link",
  "meta",
  "script",
  "style",
  "title",
  "body",
  "address",
  "article",
  "aside",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hgroup",
  "main",
  "nav",
  "section",
  "blockquote",
  "cite",
  "dd",
  "dt",
  "dl",
  "div",
  "figure",
  "figcaption",
  "hr",
  "li",
  "ol",
  "p",
  "pre",
  "ul",
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "br",
  "code",
  "data",
  "time",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "ruby",
  "rp",
  "rt",
  "s",
  "del",
  "ins",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "u",
  "var",
  "wbr",
  "area",
  "map",
  "audio",
  "source",
  "img",
  "track",
  "video",
  "embed",
  "iframe",
  "object",
  "picture",
  "canvas",
  "noscript",
  "caption",
  "col",
  "colgroup",
  "table",
  "tbody",
  "tr",
  "td",
  "tfoot",
  "th",
  "thead",
  "button",
  "datalist",
  "option",
  "fieldset",
  "label",
  "form",
  "input",
  "legend",
  "meter",
  "optgroup",
  "select",
  "output",
  "progress",
  "textarea",
  "details",
  "dialog",
  "menu",
  "summary",
  "slot",
  "template",
  "svg",
  "math"
];

let Elsguessed = [];
let domGuess = document.querySelector('#guess');
let domGuesses = document.querySelector('#guessed');
let domRemaining = document.querySelector('#remain');

function matchGuess(guess) {

  guess.preventDefault();
  let thisGuess = domGuess.value.toLowerCase();
  let domItem = document.createElement('li');

  if (Els.includes(thisGuess)) {
    if (checkGuesses(thisGuess)) return;
    domItem.textContent = thisGuess;
    domGuesses.appendChild(domItem);
    domGuess.value = "";
    keepGuesses(thisGuess);
    keepScore();
  }

  domGuess.focus();

}

function keepScore() {
  domRemaining.textContent = Els.length - domGuesses.querySelectorAll('li').length;
}

function keepGuesses(guess) {
  Elsguessed.push(guess);
}

function checkGuesses(guess) {
  return Elsguessed.includes(guess);
}

document.querySelector('#remain').textContent = Els.length;
document.querySelector('#form').addEventListener('submit', matchGuess, false);