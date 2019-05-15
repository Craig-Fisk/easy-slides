import Slide from "./slide.js";

export default class Presentation {
  constructor() {
    this.slides = [];
    this.slideElements = Array.from(document.querySelectorAll('section.slide'));

    this.controls = {
      left: document.querySelector('.controls__button--left'),
      right: document.querySelector('.controls__button--right')
    }

    this.init();

    this.firstSlide = this.slides[0];
    this.currentSlide = this.slides[0];
    this.nextSlide = this.slides[1];
  }

  init() {
    this.populateSlides();
    this.bindControls();
  }

  populateSlides() {
    const slides = [];
    this.slideElements.forEach(function (element, index) {
      const slide = new Slide(element);
      
      switch (index) {
        case 0:
          slide.first();
          break;

        case 1:
          slide.next();
          break;

        default:
          slide.hide();
          break;
      }

      slides.push(slide);
    });

    this.slides = slides;

    this.controls.left.classList.add('controls__button--hidden');
  }

  bindControls() {
    this.controls.right.addEventListener('click', (e) => {this.goToNextSlide(e)});
    this.controls.left.addEventListener('click', (e) => {this.goToPreviousSlide(e)});
  }

  updateNextSlide() {
    this.currentSlide.hide();
    this.nextSlide.current();

    this.currentSlide = this.nextSlide;
    this.nextSlide = this.slides[this.slides.indexOf(this.currentSlide) + 1];

    if(this.nextSlide) {
      this.nextSlide.next();

      this.controls.left.classList.remove('controls__button--hidden');
    } else {
      this.controls.right.classList.add('controls__button--hidden');
    }
  }

  goToNextSlide() {
    const slideIn = this.nextSlide;
    slideIn.animate(this.updateNextSlide.bind(this));
  }

  goToPreviousSlide() {
    const previousIndex = this.slides.indexOf(this.currentSlide) - 1;
    const previousSlide = this.slides[previousIndex];

    if(this.nextSlide) {
      this.nextSlide.hide();
    }
    
    this.nextSlide = this.currentSlide;
    this.currentSlide = previousSlide;

    this.currentSlide.current();

    this.nextSlide.next();

    if(previousIndex === 0) {
      this.controls.left.classList.add('controls__button--hidden');
    }
    this.controls.right.classList.remove('controls__button--hidden');
  }

  goToSlide(num) {
    let position = num === 'end' ? this.slides.length -1 : num;

    this.currentSlide.hide();

    this.nextSlide.hide();

    this.currentSlide = this.slides[position];
    this.nextSlide = this.slides.length >= position++ ? undefined : this.slides[position];

    this.currentSlide.current();

    if(this.nextSlide) {
      this.nextSlide.next();
    }

    if (position === 0) {
      this.controls.left.classList.add('controls__button--hidden');
      this.controls.right.classList.remove('controls__button--hidden');
    } else if (position++ === this.slides.length) {
      this.controls.right.classList.add('controls__button--hidden');
    }
    if (position > 0) {
      this.controls.left.classList.remove('controls__button--hidden');
    }
  }

  updateCode(styleId, inputId) {
    const styleTag = document.getElementById(styleId);
    const input = document.getElementById(inputId).value;

    styleTag.innerHTML = input;
  }
}