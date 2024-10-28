import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { FormsModule } from '@angular/forms';

interface Project {
  _id?: string;
  name?: string;
  project_key?: string;
  description?: string;
  project_url?: string;
  github_url?: string;
  assigned_to?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

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
    // // "_id": 0,
    // "name": "",
    // "project_key": "",
    // "description": ""
  };


  isModalOpen = false;
  isModal2Open = false;
  isModal3Open = false;

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

openModal2(project: Project | null = null) {
  this.isModal2Open = true;
  this.projectObj = project ? { ...project } : {};
}

openDeleteModal(project: Project | null = null) {
  this.isModal3Open = true;
  this.projectObj = project ? { ...project } : {};
}


closeModal() {
  this.isModalOpen = false;
  this.isModal2Open = false;
  this.isModal3Open = false;
  this.projectObj = {};
}

UpdateProject(){
  if (this.projectObj._id) {
    this.mastersrv.update_Project(this.projectObj._id, this.projectObj).subscribe(() => {
      this.getAllProjects();
      this.closeModal();
    });
  }
}

// DeleteProject() {
//   this.mastersrv.delete_Project(this.projectObj._id).subscribe(() => {
//     this.getAllProjects();
//   });
// }

DeleteProject() {
  if (this.projectObj._id) {
    this.mastersrv.delete_Project(this.projectObj._id).subscribe(() => {
      this.getAllProjects();
      this.closeModal();
    });
  } else {
    console.error('Project ID is not defined for deletion.');
  }
}



}
