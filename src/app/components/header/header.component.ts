import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { LoginService } from 'src/app/core/login.service';
import { CurrentUser } from '../login-status/login-status.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() loginSubject$: Observable<CurrentUser>;
  public loading: boolean = true
  public name!: string;
  public amount!: string | null;

  constructor(
    public loginService: LoginService,
  ) {
    this.loginSubject$ = this.loginService.loginData$
  }

  ngOnInit(): void {
    this.loginService.loginData$.pipe(tap(console.log))
    console.log(this.loginService.loginData)
    /* map(data => {
      debugger;
      this.name = data?.name;
      this.amount = data.amount
      this.loading = false;
    }) */
  }

  ngOnDestroy(): void {
    this.loginService.cancelSubscriptions();
  }
}
