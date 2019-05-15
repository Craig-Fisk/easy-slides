export default class Slide {
  constructor (element) {
    this.element = element;
  }

  animate (callback) {
    if(callback) {
      this.element.addEventListener('transitionend', callback, { once: true });
    }
    this.element.classList.add('slide--animate');
    this.element.classList.add('slide--current');
  }

  hide () {
    this.element.classList.add('slide--hidden');
    this.element.classList.remove('slide--animate');
    this.element.classList.remove('slide--current');
    this.element.classList.remove('slide--next');
  }

  show () {
    this.element.classList.remove('slide--hidden');
  }

  first () {
    this.element.classList.add('slide--current');
    this.element.classList.add('slide--first');
  }

  next () {
    this.element.classList.add('slide--next');
    this.element.classList.remove('slide--hidden');
    this.element.classList.remove('slide--current');
  }

  current () {
    this.element.classList.remove('slide--hidden');
    this.element.classList.remove('slide--animate');
    this.element.classList.add('slide--current');
    this.element.classList.remove('slide--next');
  }
}