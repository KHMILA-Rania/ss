import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';
import { CandidatureService } from 'src/app/services/candidature.service';
import { PostulerService } from 'src/app/services/postuler.service';

@Component({
  selector: 'app-liste-candidatures',
  templateUrl: './liste-candidatures.component.html',
  styleUrls: ['./liste-candidatures.component.scss'],
})
export class ListeCandidaturesComponent implements OnInit {
  data: any;
  ser: any;
  items: MenuItem[];

  constructor(
    private postulS: PostulerService,
    private messageService: MessageService,
    private candidatureService: CandidatureService
  ) {
    this.items = [
      {
        label: 'Refuser',
        icon: 'pi pi-times',
        command: () => {
          this.refuser();
        },
      },
      {
        label: 'Supprimer',
        icon: PrimeIcons.TRASH,
        command: () => {
          this.delete();
        },
      },
    ];
  }

  getAllPostulations() {
    this.candidatureService
      .getAll()
      .subscribe((res: any) => (this.data = res.data));
  }
  ngOnInit(): void {
    this.getAllPostulations();
  }

  save(severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: 'Candidature accepté',
    });
  }

  refuser() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'candidature rejeté',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'success',
      summary: 'success',
      detail: 'Candidature supprimé',
    });
  }

  getSeverity(status: String) {
    switch (status) {
      case 'accepté': {
        return (this.ser = 'success');
        break;
      }
      case 'refusé': {
        return (this.ser = 'danger');
        break;
      }
      default: {
        return (this.ser = 'warning');
      }
    }
  }
}
