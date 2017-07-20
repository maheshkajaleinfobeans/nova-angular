import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFeaturedComponent } from './top-featured.component';

describe('TopFeaturedComponent', () => {
  let component: TopFeaturedComponent;
  let fixture: ComponentFixture<TopFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
