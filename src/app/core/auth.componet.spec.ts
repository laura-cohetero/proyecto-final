import { AuthService } from "./auth.service";
import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('Component: Auth', () => {
    let component: AuthService;
    let fixture: ComponentFixture<AuthService>;
    
      beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [AuthService] // **Like this.**
        })
        fixture = TestBed.createComponent(AuthService);
        component = fixture.componentInstance;
      });
    
});