import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { Router } from '@angular/router';
import { ConferenceModel } from 'src/app/Models/conference.Model';
import * as _ from 'lodash';
import { from } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {
  closeResult: string;
  response : any;
  conf = new ConferenceModel();
  constructor(private modalService: NgbModal, private RepositoryService: RepositoryService, private route: Router,
      private _UserService: UserService ) { }

  ngOnInit() {
    this.getall();
  }

    private getall(){
      this.RepositoryService.getData('Conference')
      .subscribe( data => {
        this.response = data;
      });
    }

    private getconf(id, content){
      this.RepositoryService.getById('Conference',id).subscribe( data => {
        console.log(data);
        this.open(content);
        this.conf = data;
      });
    }

    private saveConf(){
      if(this.conf.uniq_id){
        this.RepositoryService.update('Conference',this.conf).subscribe( data => {
          console.log(data);
          this.getall();
        });
      } else {
        this.RepositoryService.postData('Conference',this.conf).subscribe( data => {
          console.log(data);
          this.getall();
        });
      }
      this.conf = <ConferenceModel>{};
    }

    private delconf(id){
      this.RepositoryService.delete('Conference',id).subscribe( data => {
        alert(data);
        this.getall();
      });
    }

    open(content) {
      this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
    }

    changeListener(fileInput: any): void {
      var s: string;
      var name = fileInput.target.files[0].name;
      var res = name.split('.');
      var filenamecheck: string = res[res.length - 1];
      var fext = [{ fnameext: 'png' }, { fnameext: 'jpg' }, { fnameext: 'jpeg' }];
      var fd = _.find(fext, function(o) {
        return o.fnameext === filenamecheck;
      });
      if (fileInput.target.files[0].size > 100000000) {
      //  this.toastr.error('Size limit exceeded');
      } else {
        this.uploadFile(fileInput.target.files[0]);
      }
    }
    uploadFile(file: File) {
       debugger;
      var formData = new FormData();
      var uploadedFile = file;
      formData.append(uploadedFile.name, uploadedFile);
      formData.append('uploadFile', file.name);
      this._UserService.UploadFile(formData).subscribe(
        ok => {
          console.log(ok);

        },
        nok => {
          // this.presentToast("error")
        }
      );
    }
}
