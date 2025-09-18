import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { AuthSession } from '@supabase/supabase-js'
import { SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile-component.html',
  styleUrls: ['./profile-component.css'],
  standalone: false,
})
export class ProfileComponent implements OnInit {
  loading = false
 // profile!: Profile
  updateProfileForm!: FormGroup

  get picture() {
    return this.updateProfileForm.value.picture as string
  }
  async updateAvatar(event: string): Promise<void> {
    this.updateProfileForm.patchValue({
      picture: event,
    })
    await this.updateProfile()
  }

  @Input()
  session!: AuthSession

  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder
  ) {
    this.updateProfileForm = this.formBuilder.group({
      email: '',
      username: '',
      picture: '',
    })
  } 

  async ngOnInit(): Promise<void> {
    await this.getProfile()
/*
    const { username, picture } = this.profile
    this.updateProfileForm.patchValue({
      username,
      picture,
    })
  */}

  async getProfile() {
    try {
      this.loading = true
      const { user } = this.session
      const { data: profile, error, status } = await this.supabase.profile(user)

      if (error && status !== 406) {
        throw error
      }

      if (profile) {
     //   this.profile = profile
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

  async updateProfile(): Promise<void> {
    try {
      this.loading = true
      const { user } = this.session

      const username = this.updateProfileForm.value.username as string
      const picture = this.updateProfileForm.value.picture as string

      const { error } = await this.supabase.updateProfile({
        id: user.id,
        username,
        picture,
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

  async signOut() {
    await this.supabase.signOut()
  }
}