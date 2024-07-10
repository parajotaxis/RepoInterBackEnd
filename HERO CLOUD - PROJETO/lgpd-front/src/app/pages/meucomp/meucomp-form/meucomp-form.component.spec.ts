import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucompFormComponent } from './meucomp-form.component';

describe('MeucompFormComponent', () => {
  let component: MeucompFormComponent;
  let fixture: ComponentFixture<MeucompFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeucompFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeucompFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
