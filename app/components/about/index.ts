import {Component} from 'angular2/core';

@Component({
  selector: 'about',
  template: require('./about.tmpl')(),
  styles: [require('./about.style')]
})

export default class About {
  public name: string;
  constructor() {
    this.name = 'Colin';
  }

  ngOnInit() { console.log('About::ngOnInit'); }
  ngOnDestroy() { console.log('About::ngOnDestroy'); }
}
