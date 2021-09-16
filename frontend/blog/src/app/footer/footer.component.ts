import { Component, OnInit } from '@angular/core';
import { faDeviantart } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faDeviantart = faDeviantart
  faGithub = faGithub
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
