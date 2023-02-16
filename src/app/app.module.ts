import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StepperOverviewComponent } from './components/stepper-overview/stepper-overview.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
@NgModule({
  declarations: [
    AppComponent,
    ProgressSpinnerComponent,
    SlideToggleComponent,
    SpinnerComponent,
    ProgressBarComponent,
    StepperOverviewComponent,
    TableComponent,
    CardComponent,
    InputComponent,
    SidenavComponent,
    TabsComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
