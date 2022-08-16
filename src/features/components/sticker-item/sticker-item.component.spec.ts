import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerItemComponent } from './sticker-item.component';

describe('StickerItemComponent', () => {
  let component: StickerItemComponent;
  let fixture: ComponentFixture<StickerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
