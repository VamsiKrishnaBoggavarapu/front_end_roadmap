"use strict";
name1 = "wxyz";
let name1;
return;

class Button {
  constructor(text) {
    this.text = text;
  }
  get text() {
    return this._text;
  }
  set text(value) {
    if (value.length > 3) this._text = value;
  }
  styles() {
    console.log("button styles");
  }
  click = () => {
    console.log("button click me");
  };

  static type = "button";
  static onFocus = () => {
    console.log("button focus", this.type);
  };
}

class LinkButton extends Button {
  constructor(name) {
    super(name);
  }
  // Method Override
  styles() {
    console.log("link button styles");
  }
  static onFocus() {
    console.log("link button focus", this.type);
  }
}

class ArrowButton extends Button {
  // Constructor Override
  constructor(name, icon) {
    super(name);
    this.icon = icon;
  }
}

class Label {
  #defaultColor = "Black";
  #defaultFont = "Arial";
  _fontSize = "10px";
  constructor(text) {
    this.text = text;
  }
}

class H1 extends Label {
  _fontSize = "20px";
  static padding = "10px";
  static margin = "10px";
  constructor(text) {
    super(text);
    console.log(this);
  }
  setPadding() {}
}

class H2 extends Label {
  _fontSize = "18px";
  constructor(text) {
    super(text);
    console.log(this);
  }
}
const h1 = new H1("hi");
const h2 = new H2("hello");
h1.text = 20;
console.log(h1.text);
// String.prototype.capitalize = function () {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };

// Array.prototype.isEmpty = function () {
//   return this.length === 0;
// };

// console.log([1, 2].isEmpty());
