import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatisticsComponent } from './profile-statistics.component';

describe('ProfileStatisticsComponent', () => {
  let component: ProfileStatisticsComponent;
  let fixture: ComponentFixture<ProfileStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileStatisticsComponent]
    });
    fixture = TestBed.createComponent(ProfileStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
