import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {

  projectList: any [] = [];
  projectObj: any = {
    // "_id": 0,
    "name": "",
    "project_key": "",
    "description": ""
}
  isModalOpen = false;

  mastersrv = inject(MasterService);
  // router = inject();

  ngOnInit(): void {
    this.getAllProjects();
}

getAllProjects(){
  this.mastersrv.getProject().subscribe((res: any)=> {
    this.projectList = res;
    console.log(this.projectList);
  })
}

CreateProject(){
  this.mastersrv.create_Project(this.projectObj).subscribe((res: any)=> {
    alert(res.message);
    this.getAllProjects();
    this.closeModal();
  })
}

openModal() {
  this.isModalOpen = true;
  // this.projectObj = project ? { ...project } : {};
}

// openModal(project = null) {
//   this.isModalOpen = true;
//   // this.projectObj = project ? { ...project } : {};
// }

closeModal() {
  this.isModalOpen = false;
  // this.projectObj = {};
}

// UpdateProject(){
//   this.mastersrv.update_Project(this.pr)
// }

}
