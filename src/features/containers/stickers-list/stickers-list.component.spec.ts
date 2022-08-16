import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickersListComponent } from './stickers-list.component';

describe('StickersListComponent', () => {
  let component: StickersListComponent;
  let fixture: ComponentFixture<StickersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
