import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoPComponent } from './descricao-p.component';

describe('DescricaoPComponent', () => {
  let component: DescricaoPComponent;
  let fixture: ComponentFixture<DescricaoPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
