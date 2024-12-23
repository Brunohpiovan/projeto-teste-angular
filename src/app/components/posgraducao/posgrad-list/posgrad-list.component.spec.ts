import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosgradListComponent } from './posgrad-list.component';

describe('PosgradListComponent', () => {
  let component: PosgradListComponent;
  let fixture: ComponentFixture<PosgradListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosgradListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosgradListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
