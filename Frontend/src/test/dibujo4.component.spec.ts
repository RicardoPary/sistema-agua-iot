/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dibujo4Component } from '../app/pages/dibujo4/dibujo4.component';

describe('Dibujo4Component', () => {
  let component: Dibujo4Component;
  let fixture: ComponentFixture<Dibujo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dibujo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dibujo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
