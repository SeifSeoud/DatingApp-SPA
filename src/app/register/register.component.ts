import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  /**
   *
   */
  constructor(private authService: AuthService) {}
  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log('registration Successful');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
