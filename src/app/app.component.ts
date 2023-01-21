import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GridService } from './core/grid.service';
import { LoginService } from './core/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'csgoroll';

  constructor(
    private translate: TranslateService,
    private loginService: LoginService,
    private gridService: GridService
  ) {
    this.translate.setDefaultLang('en');
    this.loginService.fetchLogin();
    this.gridService.fetchGridOfBoxes();
  }
}