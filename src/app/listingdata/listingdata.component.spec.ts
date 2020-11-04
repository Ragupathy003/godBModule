import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingdataComponent } from './listingdata.component';

describe('ListingdataComponent', () => {
  let component: ListingdataComponent;
  let fixture: ComponentFixture<ListingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
