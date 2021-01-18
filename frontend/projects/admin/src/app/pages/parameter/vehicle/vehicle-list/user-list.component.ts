import { Component, OnInit, AfterViewInit, Query } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserListService } from './user-list.service';
import { Filtro, Page, Vehicle } from './user-list-model';
import { NgxToastrServiceService } from 'projects/admin/src/app/core/ngx-toastr/ngx-toastr-service.service';


@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  private filtro: Filtro
  pageSize = 10;
  usuarioArray: Array<Vehicle> = [];
  page: Page;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userListService: UserListService, private ngxToastrServiceService: NgxToastrServiceService) {

  }

  ngOnInit(): void {
    this.filtro = this.userListService.getCurrentFiltro();
    this.formGroup = this.createForm(this.filtro);
    this.findAll(this.filtro, 0, 10);
  }

  ngAfterViewInit(): void {
  }

  createForm(filtro: Filtro): FormGroup {
    filtro = (filtro) ? filtro : new Filtro() ;
    return this.formBuilder.group({
      nome: [filtro.nome],
      situacao: [filtro.situacao],
      vehicleBrand: [filtro.vehicleBrand],
    });
  }

  private findAll(filtro, page?, size?){
    setTimeout(()=>{
      this.userListService.findAll(filtro, page, size).subscribe((result: any) => {
        console.log(result);
        this.page = result;
        this.usuarioArray = this.page.content;
      });
    });
  }

  searcheButtunOnClick(){
    this.filtro = this.formGroup.value;
    this.userListService.setCurrentFiltro(this.filtro);
    this.findAll(this.filtro);
  }

  incluirButtunOnClick(){
    this.router.navigate([`/parameter/vehicle/new`]);
  }

  editarButtunOnClick(data){
    console.log(data);
    this.router.navigateByUrl("/parameter/vehicle/edit", data);
  }

  deleteButtunOnClick(data){
    Swal.fire({
      title: `Deseja realmente excluir o veículo de código ${data.id} ?`,
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não"
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.userListService.delete(data).subscribe(result =>{
          this.ngxToastrServiceService.success('Exclusão efetuada com sucesso.', this.toasterClickedHandler);
          this.findAll(null, 0, this.pageSize);
        });
      } 
    });
  }

  toasterClickedHandler() {
    console.log('Toastr clicked');
  }

  onChangepageSize(pageSize){
    this.pageSize = pageSize;
    this.findAll(this.filtro, 0, pageSize);
  }

  changePage(event){
    this.findAll(null, event.page, event.size);
  }

  vehicleBrandArray = [
    {value: 'VOLKSWAGEN', display: 'Volkswagen'},
    {value: 'FORD', display: 'Ford'},
    {value: 'CHEVROLET', display: 'Chevrolet'},
  ];
  
  soldVehicleArray = [
    {value: true, display: 'SIM'},
    {value: false, display: 'NÃO'}
  ];
}
