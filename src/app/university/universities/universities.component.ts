import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent {
listUnis : Universite[];

selectedUniversityName: String="";
selectedUniversity: Universite;



constructor(private ac:ActivatedRoute, private uniServ:UniversiteServiceService,private router: Router){
  console.log("custructor");
}

ngOnInit(){
   this.uniServ.getAllUniversite().subscribe((res:Universite[])=>this.listUnis=res);
    console.log("initiation ListUserComponent");
 }

 deleteUni(idu: number) {
  this.uniServ.deleteUniversite(idu).subscribe(() => {
    this.listUnis = this.listUnis.filter(u => u.idUniversite !== idu);    // Remove the deleted university from the list and refresh
  });
}

 //databinding : extracting university from the table and fill selecteduni and uni name and use their value in son component (infos)
 selectUniversity(university: Universite) {
  this.selectedUniversityName = university.nomUniversite;
  this.selectedUniversity=university;
}


recoverUniversity() {
  this.uniServ.addUniversite(this.selectedUniversity).subscribe((recoveredUni: Universite) => {
    this.listUnis.push(recoveredUni); //refresh the list
  });
}


 
}
