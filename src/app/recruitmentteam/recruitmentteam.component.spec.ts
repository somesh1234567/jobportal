import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentteamComponent } from './recruitmentteam.component';

describe('RecruitmentteamComponent', () => {
  let component: RecruitmentteamComponent;
  let fixture: ComponentFixture<RecruitmentteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
