import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucompListComponent } from './meucomp-list.component';

describe('MeucompListComponent', () => {
  let component: MeucompListComponent;
  let fixture: ComponentFixture<MeucompListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeucompListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeucompListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
