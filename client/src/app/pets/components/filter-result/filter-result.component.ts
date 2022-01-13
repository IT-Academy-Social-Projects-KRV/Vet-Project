import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss']
})
export class FilterResultComponent implements OnInit {
  @Input() data: { id: string; name: string; gender: string; breed: string; age: string; curator: string}
 


  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
    
  }


}
