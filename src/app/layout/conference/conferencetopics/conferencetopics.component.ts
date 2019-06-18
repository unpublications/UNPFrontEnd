import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conferencetopics',
  templateUrl: './conferencetopics.component.html',
  styleUrls: ['./conferencetopics.component.scss']
})
export class ConferencetopicsComponent implements OnInit {

  constructor( private RepositoryService: RepositoryService, private route: Router ) { }

  ngOnInit() {

  }

}
