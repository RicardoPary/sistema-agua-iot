import { Component, OnInit} from '@angular/core';
import { EstadosService } from '../../services/estados.service';

@Component({
  selector: 'app-flow-register',
  templateUrl: './flow-register.component.html',
  styleUrls: ['./flow-register.component.scss']
})
export class FlowRegisterComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="fa fa-chevron-up"></i>',
      createButtonContent: '<i class="fa fa-chevron-up"></i>',
      cancelButtonContent: '<i class="fa fa-chevron-up"></i>',
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil-square fa-lg" aria-hidden="true" style="color:#2F4050">',
      saveButtonContent: '<i class="fa fa-pencil-square fa-lg" aria-hidden="true" style="color:#2F4050">',
      cancelButtonContent: '<i class="fa fa-pencil-square fa-lg" aria-hidden="true" style="color:#2F4050">',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash fa-lg" aria-hidden="true" style="color:#2F4050"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
    }
  };
  
  data = [
    {id:3,name:"riki",username:"sadas",email:"asdasd"},
    {id:4,name:"riki",username:"sadas",email:"asdasd"},
    {id:5,name:"riki",username:"sadas",email:"asdasd"},
    {id:6,name:"riki",username:"sadas",email:"asdasd"},
    {id:7,name:"riki",username:"sadas",email:"asdasd"},
    {id:8,name:"riki",username:"sadas",email:"asdasd"},
    {id:3,name:"riki",username:"sadas",email:"asdasd"}
  ];
  

  
  constructor() {

  }

  ngOnInit(){

  }

  onSearch(query: string = '') {

  }
}

