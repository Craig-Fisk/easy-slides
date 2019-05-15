# Easy-Slides
Simple web based slide show presentation library

Designed currently to be a template repo that can be forked to build presentations.

*In the future this may be expanded to be a more full library supporting themeing etc*

## Getting Started

```
npm install
```

**Development mode**
```
npm run start-dev
```
**Presentation mode**
```
npm start
```

### Slide CSS Classes
| Class | Use |
| ---   | --- |
| .slide   | All slides must have this class |
| .slide--title   | Centers Text by default |
| .slide--animate   | *Internal class* Used to animate slides |
| .slide--next   | *Internal class* Used to position slide |
| .slide--hidden   | *Internal class* Used to hide slides |
| .slide--first   | *Internal class* Used to mark the start of a slide show |
| .slide--current   | *Internal class* Used to mark the current slide |
