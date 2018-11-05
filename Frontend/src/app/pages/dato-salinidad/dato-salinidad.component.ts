import {Component, OnInit} from '@angular/core';
import {AutosService} from '../../shared/services/autos.service';

@Component({
  selector: 'app-dato-salinidad',
  templateUrl: './dato-salinidad.component.html',
  styleUrls: ['./dato-salinidad.component.scss']
})
export class DatoSalinidadComponent implements OnInit {

  datos: any;
  estados: any;

  settings = {
    add: {
      addButtonContent: '<i class="fa fa-plus fa-lg"></i>',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil-square fa-lg"></i>',
      saveButtonContent: 'Update',
      cancelButtonContent: 'Cancel',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash fa-lg"></i>',
      confirmDelete: true
    },
    columns: {
      grupo: {title: 'Grupo', filter: false},
      flujo: {title: 'Flujo', filter: false},
      rfid: {title: 'RFID', filter: false},
      prioridad: {title: 'Prioridad', filter: false},
      placa: {title: 'Placa', filter: false},
      tipo: {title: 'Tipo', filter: false},
      carnet: {title: 'Carnet', filter: false},
      otro: {title: 'Otro', filter: false},
      posicion: {title: 'Posicion', filter: false},
      fecha: {title: 'Fecha', filter: false},
      hora: {title: 'Hora', filter: false}
    }
  };

  constructor(private flujoRegistro: AutosService) {

  }

  ngOnInit() {
  }

  onSearch(query: string = '') {


  }
}

