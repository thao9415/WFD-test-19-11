import {Component, OnInit} from '@angular/core';
import {Awesome} from '../../interface/awesome';
import {AwesomeService} from '../../services/awesome.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  awesomeList: Awesome[];

  constructor(private bookSevice: AwesomeService) {
  }

  ngOnInit() {
    this.bookSevice.getBook().subscribe(next => {
      this.awesomeList = next;
      console.log(this.awesomeList);
    });
  }

}
