import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
@NgModule({
  declarations: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent],
  providers: [ModalService],
})
export class SharedModule {}
