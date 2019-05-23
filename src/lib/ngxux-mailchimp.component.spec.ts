import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxMailchimpComponent } from './ngxux-mailchimp.component';

describe('NgxuxMailchimpComponent', () => {
  let component: NgxuxMailchimpComponent;
  let fixture: ComponentFixture<NgxuxMailchimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxMailchimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxMailchimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
