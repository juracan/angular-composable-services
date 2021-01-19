import { Component, OnInit } from '@angular/core';
import { ClientTabService } from '../../tab-services/client-tab.service';

@Component({
  selector: 'app-client-tab',
  templateUrl: './client-tab.component.html',
  styleUrls: ['./client-tab.component.scss'],
})
export class ClientTabComponent implements OnInit {
  selectedClient = '';

  constructor(private clientTabService: ClientTabService) {}

  ngOnInit(): void {
    this.selectedClient = this.clientTabService.getClient(Math.floor(Math.random() * 10));
  }
}
