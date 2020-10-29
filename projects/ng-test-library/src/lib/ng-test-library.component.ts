import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-test-library',
  template: `
    <p>
      ng-test-library works!
    </p>
  `,
  styles: [
  ]
})
export class NgTestLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
