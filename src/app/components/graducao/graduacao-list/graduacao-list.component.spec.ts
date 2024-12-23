import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduacaoListComponent } from './graduacao-list.component';

describe('GraduacaoListComponent', () => {
  let component: GraduacaoListComponent;
  let fixture: ComponentFixture<GraduacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduacaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
