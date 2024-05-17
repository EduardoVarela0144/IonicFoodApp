import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResturantesPage } from './resturantes.page';

describe('ResturantesPage', () => {
  let component: ResturantesPage;
  let fixture: ComponentFixture<ResturantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
