/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DibujoComponent } from '../app/pages/dibujo/dibujo.component';

describe('DibujoComponent', () => {
  let component: DibujoComponent;
  let fixture: ComponentFixture<DibujoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DibujoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DibujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
