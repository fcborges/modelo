import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAlunoComponent } from './tab-aluno.component';

describe('TabAlunoComponent', () => {
  let component: TabAlunoComponent;
  let fixture: ComponentFixture<TabAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
