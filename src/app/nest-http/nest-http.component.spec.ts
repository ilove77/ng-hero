import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestHttpComponent } from './nest-http.component';

describe('NestHttpComponent', () => {
  let component: NestHttpComponent;
  let fixture: ComponentFixture<NestHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
