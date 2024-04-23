import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categoryList: any[] = [];
  isLoading: boolean = false
  constructor(private masterSrv: MasterService, private router: Router) {

  }

  ngOnInit(): void {
    this.loadAllFoodCategories()
  }

  loadAllFoodCategories() {
    this.masterSrv.getAllFoodCategory().subscribe((res: any)=> {
      this.isLoading = true
      if (res.data.length !== ''){
        this.categoryList = res.data;
        this.isLoading = false
      } 
    })
  }
  navigate(item: string) {
    console.log(item)
    this.router.navigate(['/restaurant-items',item])
  }


}
