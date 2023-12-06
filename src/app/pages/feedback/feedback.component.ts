import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  styles: `
    .form {
      height: 70vh;
      justify-content: center;
    }
  `,
  imports: [],
  template: `
    <form class="centered form">
      <h2 class="mb">Зв'язок з куратором</h2>
      <textarea
        [value]="feedback()"
        (input)="handleChange($event)"
        class="form-control"
      ></textarea>
    </form>
  `,
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this);
  }

  handleChange(event) {
    this.feedback.set(event.target.value);
    if (this.feedback().trim()) {
      this.telegram.MainButton.show();
    } else {
      this.telegram.MainButton.hide();
    }
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Надіслати повідомлення');
    // this.telegram.MainButton.show();
    // this.telegram.MainButton.disable();
    this.telegram.MainButton.hide();
    this.telegram.MainButton.onClick(this.sendData);
  }

  sendData() {
    this.telegram.sendData({ feedback: this.feedback() });
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData);
  }
}
