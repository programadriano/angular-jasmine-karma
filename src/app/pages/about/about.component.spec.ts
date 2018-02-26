import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


//Modules used for testing
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {

  //Typescript declarations.
  let comp: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let birthday = '02/25/2000'
  let birthday2 = '02/27/2000'

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    comp = fixture.componentInstance;
  });

  it('Pode assistir o filme', () => {
    expect(comp.question(birthday))
      .toBe(true);
  });

  it('Não pode assistir o filme', () => {
    expect(comp.question(birthday2))
      .toBe(false);
  });

})
