/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Dibujo5Component} from "../app/pages/dibujo5/dibujo5.component";



describe('Dibujo5Component', () => {
  let component: Dibujo5Component;
  let fixture: ComponentFixture<Dibujo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dibujo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dibujo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
