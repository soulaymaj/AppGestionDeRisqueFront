import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActifsComponent } from './list-actifs.component';

describe('ListActifsComponent', () => {
  let component: ListActifsComponent;
  let fixture: ComponentFixture<ListActifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListActifsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
