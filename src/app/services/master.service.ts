import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTM5MmQ0NzJkYzkyMDIwNzZjZGMyOCIsInVzZXJuYW1lIjoiMDAyODc0MDgwIiwiaWF0IjoxNzEyNzAzOTMwLCJleHAiOjE3MTQ4NjM5MzB9.-AVKDYxMEHSohUDMfr9WHEZ6QeUfjg8Jtw1yUDbMNoQ';
  baseUrl = "https://smooth-comfort-405104.uc.r.appspot.com/document"
  cartItems: any = {
    items: []
  };
   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type', 
    Authorization: this.apiKey
  }
   requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor(private http: HttpClient) { }

  getAllFoodCategory() {
    const url = this.baseUrl + "/findAll/categories"
    
    return this.http.get(url, this.requestOptions);

  }

  getItemsByRestaBYCategoryName(Id: string) {
    const url = this.baseUrl + "/findOne/categories/" + Id
    
    return this.http.get(url, this.requestOptions);
  }
  GetFoodItemOfRestaurantByCategory(restaurantID:number,categoryId: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemOfRestaurantByCategory?restaurantId='+ restaurantID+'&categoryId='+categoryId)
  }
  

  GetAllCartItemsByCustomerId(customerId:number,restaurantID: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetCartItemsByCustomerIdForRestaurant?customerId='+ customerId+'&restaurantId='+restaurantID)
  }
  
  GetRestaurantByRestaurantId(name: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantByRestaurantId?restaurantID='+ name)
  }
  
  login() {
   const url = this.baseUrl + "/findAll/register"
    
    return this.http.get(url, this.requestOptions);
  }
  register(obj:any) {
    const url = this.baseUrl + "/createorupdate/register"
     
     return this.http.post(url, obj, this.requestOptions);
   }

  placeOrder(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/AddNewOrder", obj);
  }


  addToCart(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/AddToCart", obj);
  }
  UpdateCartQuantity(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/UpdateCartQuantity", obj);
  }
}
