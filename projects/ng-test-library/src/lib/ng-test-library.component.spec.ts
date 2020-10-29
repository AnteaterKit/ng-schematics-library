import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestLibraryComponent } from './ng-test-library.component';

describe('NgTestLibraryComponent', () => {
  let component: NgTestLibraryComponent;
  let fixture: ComponentFixture<NgTestLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTestLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
