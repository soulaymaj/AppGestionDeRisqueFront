import { Component, OnInit } from '@angular/core';
import { ActifService } from '../../services/actif.service';
import { Actif } from '../../models/actif.model';

@Component({
  selector: 'app-list-actifs',
  templateUrl: './list-actifs.component.html',
  styleUrls: ['./list-actifs.component.css']
})
export class ListActifsComponent implements OnInit {

  actifs: Actif[] = [];
  newActif: Actif = { nom: '', description: '' }; // Model for new actif
  selectedActif: Actif | null = null; // Model for the actif being edited
  showAddActifForm: boolean = false; // Controls visibility of the add actif form

  constructor(private actifService: ActifService) {}

  ngOnInit(): void {
    this.actifService.getActifs().subscribe(data => {
      this.actifs = data;
    });
  }

  toggleAddActifForm(): void {
    this.showAddActifForm = !this.showAddActifForm;
  }

  addActif(): void {
    this.actifService.addActif(this.newActif).subscribe(actif => {
      this.actifs.push(actif);
      this.newActif = { nom: '', description: '' }; // Reset form
      this.showAddActifForm = false; // Hide form after adding
    });
  }

  selectActif(actif: Actif): void {
    this.selectedActif = { ...actif };
  }

  updateActif(): void {
    if (this.selectedActif) {
      this.actifService.updateActif(this.selectedActif).subscribe(updatedActif => {
        const index = this.actifs.findIndex(a => a.id === updatedActif.id);
        if (index !== -1) {
          this.actifs[index] = updatedActif;
        }
        this.clearSelection();
      });
    }
  }

  deleteActif(id: number): void {
    this.actifService.deleteActif(id).subscribe(() => {
      this.actifs = this.actifs.filter(actif => actif.id !== id);
    });
  }

  clearSelection(): void {
    this.selectedActif = null;
  }
}
