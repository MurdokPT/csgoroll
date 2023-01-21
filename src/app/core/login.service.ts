import { BehaviorSubject, Subject, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { CurrentUser, User, Wallet } from "../components/login-status/login-status.model";
import { CurrencyPipe } from "@angular/common";

@Injectable()
export class LoginService {
    private apolloSubscription: Subscription[] = []
    private readonly _loginData = new BehaviorSubject<any>([]);
    readonly loginData$ = this._loginData.asObservable();

    get loginData(): any {
      return this._loginData.getValue();
    }

    private set loginData(val: any) {
      this._loginData.next(val);
    }

    constructor(
        private apollo: Apollo,
        private cp: CurrencyPipe
    ) { }

    public fetchLogin(): any {
        this.apollo
        .query<any>({
          query: gql`
          {
            currentUser {
                id
                name 
                wallets {
                    id
                    amount
                    currency
                }
            }
        }        
          `
        })
        .subscribe(
          (response: any) => {
            const newLogin = {
              name: response.data?.currentUser.name,
              amount: this.calcAmount(response.data?.currentUser.wallets)
            }
            this.loginData = [newLogin]
            console.log(this.loginData);
          }
        );
    }

    public cancelSubscriptions(): void {
        this.apolloSubscription.forEach(subscription => {
            subscription.unsubscribe();
        })
    }

    private calcAmount(wallets: Wallet[]): string | null{
      if(!!wallets){
        let tempAmount  = 0;
        wallets?.forEach(wallet => tempAmount = tempAmount + wallet.amount)
        let currency = wallets[0].currency;
        return this.cp.transform(tempAmount, currency);
      }
      return '';
    }
}