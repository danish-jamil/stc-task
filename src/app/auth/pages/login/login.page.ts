import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EMPTY, catchError, filter, of, tap } from 'rxjs';

@Component({
  selector: 'stc-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.sass'],
})
export class LoginPage {
  private readonly _fb = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _router = inject(Router);

  submitted = false;
  loading = false;

  // Typed by default, TODO: only allow special characters in password, do not allow spaces in username
  form = this._fb.group({
    username: ['', [Validators.required, Validators.maxLength(100)]],
    password: ['', [Validators.required, Validators.maxLength(100)]],
  });

  submit(event: Event) {
    event.preventDefault();
    this.submitted = true;

    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.loading = true;

      this._authService
        .login(username!, password!)
        .pipe(
          tap(() => {
            this.loading = false;
          }),
          catchError(() => {
            this.loading = false;
            return EMPTY;
          }),
          takeUntilDestroyed(this._destroyRef)
        )
        .subscribe(() => {
          if (username === 'admin') {
            this._router.navigate(['/admin']);
          }
          if (username === 'user') {
            this._router.navigate(['/products']);
          }
        });
    }
  }
}
