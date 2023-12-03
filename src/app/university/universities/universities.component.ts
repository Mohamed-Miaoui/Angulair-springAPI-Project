import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  //styleUrls: ['./universities.scss']
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent {
listUnis! : Universite[];

constructor(private ac:ActivatedRoute, private uniServ:UniversiteServiceService){
  console.log("custructor");
}
ngOnInit(){
   this.uniServ.getAllUniversite().subscribe((res:Universite[])=>this.listUnis=res);
    console.log("initiation ListUserComponent");
 }

 // binded to a delete button in Universities html , no component needed.
 deleteUni(idu : number){
  this.uniServ.deleteUniversite(idu).subscribe();
  location.reload();
 }
 
}
