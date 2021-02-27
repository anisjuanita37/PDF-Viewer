import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book1Page } from './book1.page';

describe('Book1Page', () => {
  let component: Book1Page;
  let fixture: ComponentFixture<Book1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
