import { Subject, Subscription } from "rxjs";
import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable()
export class GridService {
    private apolloSubscription: Subscription[] = []
    public gridData$ = new Subject<any>();

    constructor(
        private apollo: Apollo,
    ) {

    }

    public fetchGridOfBoxes(): any {
        this.apollo
        .query<any>({
          query: gql`
          {
            boxes(free: false, purchasable: true, openable: true) { 
                            edges { 
                                node {
                        id
                        name
                        iconUrl
                        cost
                    }
                }
            }
        }                 
          `
        })
        .subscribe(
          (response: any) => {
            console.log(response.data?.boxes)
            this.gridData$.next(response.data?.boxes);
          }
        );
    }

    public cancelSubscriptions(): void {
        this.apolloSubscription.forEach(subscription => {
            subscription.unsubscribe();
        })
    }
}