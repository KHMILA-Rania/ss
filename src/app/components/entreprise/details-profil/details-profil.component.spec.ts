import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProfilComponent } from './details-profil.component';

describe('DetailsProfilComponent', () => {
  let component: DetailsProfilComponent;
  let fixture: ComponentFixture<DetailsProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsProfilComponent]
    });
    fixture = TestBed.createComponent(DetailsProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
