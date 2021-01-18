import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxToastrServiceService } from 'projects/admin/src/app/core/ngx-toastr/ngx-toastr-service.service';
import { Funcao } from '../../funcao/funcao.model';
import { FuncaoService } from '../../funcao/funcao.service';
import { Perfil } from '../../perfil/perfil.model';
import { PerfilService } from '../../perfil/perfil.service';
import { Vehicle } from '../vehicle-list/user-list-model';
import { UserForm } from './user-form.model';
import { UserFormService } from './user-form.service';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  funcaoArray;
  perfiloArray;
  formGroup: FormGroup;

  private user;

  constructor(
    private userFormService: UserFormService,
    private perfilService: PerfilService,
    private funcaoService: FuncaoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ngxToastrServiceService: NgxToastrServiceService) {

    const navigation = this.router.getCurrentNavigation();
    this.user = navigation.extras;
  }

  ngOnInit(): void {
    this.formGroup = this.createForm(this.user);
  }

  createForm(vehicle): FormGroup {
    this.user = (vehicle.id) ? vehicle : new UserForm() ;
    return this.formBuilder.group({
      id: [vehicle.id],
      veiculo: [vehicle.veiculo, Validators.required],
      marca: [vehicle.marca, Validators.required],
      ano: [vehicle.ano, Validators.required],
      descricao: [vehicle.descricao, Validators.required],
      vendido: [vehicle.vendido, Validators.required]
    });
  }

  voltarButtunOnClick() {
    this.router.navigate([`/parameter/vehicle`]);
  }

  salvarButtunOnClick() {
    const userForm: UserForm = this.formGroup.value;

    
    console.log(this.formGroup.valid);
    if(this.formGroup.valid){

      if(!userForm.id){
        userForm.marca = userForm.marca.value;
        userForm.vendido = userForm.vendido.value;
        console.log(userForm);
        this.userFormService.save(userForm).subscribe(
          result=>{
            this.ngxToastrServiceService.success('Cadastro efetuado com sucesso!', this.toasterClickedHandler);
            this.router.navigate(["/parameter/vehicle"]);
          }, 
          error => {
              this.ngxToastrServiceService.error('Operação não realizada. Usuário já incluído.', this.toasterClickedHandler);
          }
        );
      }else{
        this.userFormService.update(userForm).subscribe(
          result=>{
            this.ngxToastrServiceService.success('Alteração efetuada com sucesso!', this.toasterClickedHandler);
            this.router.navigate(["/parameter/vehicle"]);
          },
          error => {
            console.log(error);
              this.ngxToastrServiceService.error('Operação não realizada. Usuário já incluído.', this.toasterClickedHandler);
          }
        );
      }
    }
  }

  toasterClickedHandler() {
    console.log('Toastr clicked');
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
