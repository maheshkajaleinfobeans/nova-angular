import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSinglesComponent } from './top-singles.component';

describe('TopSinglesComponent', () => {
  let component: TopSinglesComponent;
  let fixture: ComponentFixture<TopSinglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSinglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
