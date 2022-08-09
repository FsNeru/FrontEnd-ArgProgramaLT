import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario : Usuario|undefined;
  public updateUsuario:Usuario | undefined;

  constructor(private headerService : HeaderService) {

  }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void{
    this.headerService.getUser().subscribe({
      next: (response: Usuario) =>{
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onClickUpdate(usuario:Usuario):void{
    this.updateUsuario=usuario;
    console.log("------------------On click update------------------")
    console.log(this.updateUsuario)
    console.log("---------------------------------------------------")
  }

  public onUpdateUsuario(usuario:Usuario):void{
    this.updateUsuario=usuario;
    console.log("------------------Metodo on Update------------------")
    console.log(usuario)
    console.log("--------------------------------------------------------------")
    this.headerService.updateUser(usuario).subscribe({
      next: (response: Usuario) =>{
        this.getUser();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }



}
