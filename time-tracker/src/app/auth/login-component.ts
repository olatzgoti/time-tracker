import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { SupabaseService } from '../supabase.service'

@Component({
  standalone: true,
  selector: 'app-login-component',
  imports:[ ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  
  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {}
  loading = false


  ngOnInit() { 
    this.loginForm = this.formBuilder.group({ email: '',})  }
  
  async onSubmit(): Promise<void> {
    try{
      {
        this.loading = true
        this.loginForm = this.formBuilder.group({
          email: '',
        });
      }
      const email = this.loginForm.value.email as string
      const { error } = await this.supabase.signIn(email)
      
      if (error) throw error
      alert('Check your email for the login link!')
    } 
  
    catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {

      this.loginForm.reset()
      this.loading = false
    }
  }
}