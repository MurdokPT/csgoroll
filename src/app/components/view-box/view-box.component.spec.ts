import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoxComponent } from './view-box.component';

describe('ViewBoxComponent', () => {
  let component: ViewBoxComponent;
  let fixture: ComponentFixture<ViewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
