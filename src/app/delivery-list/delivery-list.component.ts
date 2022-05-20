import { Component, OnInit,DoCheck } from '@angular/core';
import * as data from '../../assets/data.json';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit,DoCheck {
  p: number = 1;
  deliveryList:any=[];
  pagenationList:any=[];
 
  constructor(
    
  ) {
    this.deliveryList.push(JSON.parse(JSON.stringify(data)))
    console.log(this.deliveryList[0].default)
   }

  ngOnInit(): void {
    let pageNumber=Math.ceil(this.deliveryList[0].default.length)/10
    for(let i=1; i<=pageNumber ;i++){
      this.pagenationList.push(i)
    }
   
  }
ngDoCheck(){
  setTimeout(()=>{
    let previous=document.querySelectorAll('li.pagination-previous')
    previous[0].children[0].innerHTML=''
    let next=document.querySelectorAll('li.pagination-next')
    next[0].children[0].innerHTML=''
  },0)

}
}
