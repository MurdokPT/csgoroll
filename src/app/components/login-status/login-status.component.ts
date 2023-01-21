import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from './login-status.model';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginStatusComponent {
  @Input() name!: string;
  @Input() amount!: string | null;
  @Input() loading!: boolean;
}
