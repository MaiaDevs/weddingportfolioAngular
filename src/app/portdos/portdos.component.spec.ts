import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortdosComponent } from './portdos.component';

describe('PortdosComponent', () => {
  let component: PortdosComponent;
  let fixture: ComponentFixture<PortdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
