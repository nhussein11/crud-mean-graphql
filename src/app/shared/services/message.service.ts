import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class HandleMessageService {
  constructor(private _messageService: MessageService) {}
  showMessage(severity: string, summary: string, detail: string) {
    this._messageService.add({
      severity,
      summary,
      detail,
    });
  }
}
