/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { maps } from '../app/pages/maps/maps.component';

describe('maps', () => {
  let component: maps;
  let fixture: ComponentFixture<maps>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ maps ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(maps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
