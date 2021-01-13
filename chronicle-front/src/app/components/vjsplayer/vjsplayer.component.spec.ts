import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VjsPlayerComponent } from './vjsplayer.component';

describe('VjsplayerComponent', () => {
  let component: VjsPlayerComponent;
  let fixture: ComponentFixture<VjsPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VjsPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VjsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});