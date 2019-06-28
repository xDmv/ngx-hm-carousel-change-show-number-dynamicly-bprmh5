import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  
  // when element length equal 1, disable drag.
  get notDrag(){
    return this.avatars.length === 1;
  }
  index = 0;

  showNum = 1;

  avatars = '1234567890'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });

  constructor() { }

}
