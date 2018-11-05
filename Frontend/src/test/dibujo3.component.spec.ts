/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dibujo3Component } from '../app/pages/dibujo3/dibujo3.component';

describe('Dibujo3Component', () => {
  let component: Dibujo3Component;
  let fixture: ComponentFixture<Dibujo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dibujo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dibujo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
