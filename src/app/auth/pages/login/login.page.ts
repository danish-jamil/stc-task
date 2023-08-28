import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'stc-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.sass']
})
export class LoginPage {}
