import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.component.html',
  styleUrls: ['./enviar.component.css']
})
export class EnviarComponent implements OnInit {

  showform = true;

  enviar = new FormGroup({
    user1name: new FormControl("", Validators.required),
    user1lastname: new FormControl("", Validators.required),
    user1address: new FormControl("", Validators.required),
    user1id: new FormControl("", Validators.required),
    user2name: new FormControl("", Validators.required),
    user2lastname: new FormControl("", Validators.required),
    user2address: new FormControl("", Validators.required),
    user2id: new FormControl("", Validators.required),
    tipo: new FormControl("", Validators.required),
    alto: new FormControl("", Validators.required),
    largo: new FormControl("", Validators.required),
    ancho: new FormControl("", Validators.required),
    peso: new FormControl("", Validators.required),
  });

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.service.enviar().subscribe(res => console.log(res));
  }
  
  sendInfo() {
    console.log(this.enviar.value)
    this.service.paquete({peso:this.enviar.value.peso, alto: this.enviar.value.alto}).subscribe(res => console.log(res));
    this.showform = false;
  }

  clean(){
    this.enviar.reset();
  }

}
