import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnfahrtPage } from './anfahrt.page';

describe('AnfahrtPage', () => {
  let component: AnfahrtPage;
  let fixture: ComponentFixture<AnfahrtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfahrtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnfahrtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
