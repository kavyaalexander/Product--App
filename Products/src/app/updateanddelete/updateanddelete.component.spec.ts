import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateanddeleteComponent } from './updateanddelete.component';

describe('UpdateanddeleteComponent', () => {
  let component: UpdateanddeleteComponent;
  let fixture: ComponentFixture<UpdateanddeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateanddeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateanddeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
