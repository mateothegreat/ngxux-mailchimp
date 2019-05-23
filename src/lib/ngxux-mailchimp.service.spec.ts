import { TestBed } from '@angular/core/testing';

import { NgxuxMailchimpService } from './ngxux-mailchimp.service';

describe('NgxuxMailchimpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxMailchimpService = TestBed.get(NgxuxMailchimpService);
    expect(service).toBeTruthy();
  });
});
