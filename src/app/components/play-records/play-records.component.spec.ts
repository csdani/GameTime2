import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayRecordsComponent } from './play-records.component';

describe('PlayRecordsComponent', () => {
  let component: PlayRecordsComponent;
  let fixture: ComponentFixture<PlayRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayRecordsComponent]
    });
    fixture = TestBed.createComponent(PlayRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
