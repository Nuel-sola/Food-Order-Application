import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectFoodComponent } from './pages/select-food/select-food.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoaderComponent } from './pages/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    RestaurantItemsComponent,
    CreateOrderComponent,
    SelectFoodComponent,
    LayoutComponent,
    RegisterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
