/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dibujo2Component } from '../app/pages/dibujo2/dibujo2.component';

describe('Dibujo2Component', () => {
  let component: Dibujo2Component;
  let fixture: ComponentFixture<Dibujo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dibujo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dibujo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
