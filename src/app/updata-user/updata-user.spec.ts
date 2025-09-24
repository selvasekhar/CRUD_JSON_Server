import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataUser } from './updata-user';

describe('UpdataUser', () => {
  let component: UpdataUser;
  let fixture: ComponentFixture<UpdataUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdataUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdataUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
