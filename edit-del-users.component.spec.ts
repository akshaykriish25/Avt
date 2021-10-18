import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelUsersComponent } from './edit-del-users.component';

describe('EditDelUsersComponent', () => {
  let component: EditDelUsersComponent;
  let fixture: ComponentFixture<EditDelUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDelUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
