import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  import { AppRoutingModule } from './app-routing.module'; // Ensure this is imported
import { AppComponent } from './app.component';
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component'; // Correct path
// Import FormsModule if you're using [(ngModel)]
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MortgageCalculatorComponent // Declare your component
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule here
    AppRoutingModule // Import AppRoutingModule last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
