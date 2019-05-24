import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyoaComponent } from './cyoa.component';

describe('CyoaComponent', () => {
  let component: CyoaComponent;
  let fixture: ComponentFixture<CyoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
