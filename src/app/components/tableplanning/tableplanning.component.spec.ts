import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableplanningComponent } from './tableplanning.component';

describe('TableplanningComponent', () => {
  let component: TableplanningComponent;
  let fixture: ComponentFixture<TableplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableplanningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
