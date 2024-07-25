import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorSectionComponent } from './autor-section.component';

describe('AutorSectionComponent', () => {
  let component: AutorSectionComponent;
  let fixture: ComponentFixture<AutorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
