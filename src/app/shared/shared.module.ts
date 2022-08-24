import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
@NgModule({
  declarations: [ModalComponent, TabsContainerComponent],
  imports: [CommonModule],
  exports: [ModalComponent],
  providers: [ModalService],
})
export class SharedModule {}
