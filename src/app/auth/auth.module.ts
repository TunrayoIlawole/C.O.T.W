import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthEffects } from './state/auth.effect';

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        RouterModule.forChild([{ path: '', component: AuthComponent }]),
        SharedModule,
        EffectsModule.forFeature([AuthEffects]) 
    ]
})
export class AuthModule {}