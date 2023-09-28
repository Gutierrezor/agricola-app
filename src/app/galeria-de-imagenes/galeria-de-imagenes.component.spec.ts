import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDeImagenesComponent } from './galeria-de-imagenes.component';

describe('GaleriaDeImagenesComponent', () => {
  let component: GaleriaDeImagenesComponent;
  let fixture: ComponentFixture<GaleriaDeImagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaDeImagenesComponent]
    });
    fixture = TestBed.createComponent(GaleriaDeImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
