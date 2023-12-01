import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.scss']
  //styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent {
listUnis! : Universite[];
constructor(private ac:ActivatedRoute, private uniServ:UniversiteServiceService){
  console.log("custructor");
}
ngOnInit(){
  // this.list=this.us1.getAllUsers();
   this.uniServ.getAllUniversite().subscribe((res:Universite[])=>this.listUnis=res);
   //console.log(this.ac.snapshot.params['category']);
 console.log("initiation ListUserComponent");
 //this.category=this.ac.snapshot.params['category'];
 //this.ac.paramMap.subscribe(res=>this.category=res.get('category'));
 
 }
}
