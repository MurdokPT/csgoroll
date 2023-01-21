import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOfBoxesComponent } from './grid-of-boxes.component';

describe('GridOfBoxesComponent', () => {
  let component: GridOfBoxesComponent;
  let fixture: ComponentFixture<GridOfBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOfBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridOfBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
