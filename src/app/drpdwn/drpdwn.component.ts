import { Component, Query, } from '@angular/core';



@Component({
  selector: 'app-drpdwn',
  templateUrl: './drpdwn.component.html',
  styleUrls: ['./drpdwn.component.scss']
})
export class DrpdwnComponent {
  selectedOptions: any;
  
  optionsList = [
    { id: 1, name: 'Options 1' },
    { id: 2, name: 'Options 2' },
    { id: 3, name: 'Options 3' },
    { id: 4, name: 'Options 4' },
    { id: 5, name: 'Options 5' },
    { id: 6, name: 'Options 6' },
    { id: 7, name: 'Options 7' },
    { id: 8, name: 'Options 8' },
    { id: 9, name: 'Options 9' },
    { id: 10, name: 'Options 10' },
  ];

}
