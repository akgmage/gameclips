import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];
  constructor() {}

  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal() {
    // this.visible = !this.visible;
  }
  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }
}
