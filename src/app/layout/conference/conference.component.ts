import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { Router } from '@angular/router';
import { ConferenceModel } from 'src/app/Models/conference.Model';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {
  closeResult: string;
  response : any;
  conf = new ConferenceModel();
  constructor(private modalService: NgbModal, private RepositoryService: RepositoryService, private route: Router ) { }

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
}
