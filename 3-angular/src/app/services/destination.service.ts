import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthHTTPService } from './auth-http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private authHttp: AuthHTTPService) {}

  getAllDestinations(): Observable<any[]> {
    return this.authHttp.get(`${environment.apiBaseUrl}/destinations`);
  }

  createDestination(destination: any, productId: any): Observable<any> {
    const destinationWithProductId = { ...destination, productId };
    return this.authHttp.post(
      `${environment.apiBaseUrl}/destinations`,
      destinationWithProductId
    );
  }

  updateDestination(destination: any): Observable<any> {
    console.log(destination);

    return this.authHttp.put(
      `${environment.apiBaseUrl}/destinations/${destination.id}`,
      destination
    );
  }

  deleteDestination(destinationId: string): Observable<{ id: string }> {
    return this.authHttp.delete(
      `${environment.apiBaseUrl}/destinations/${destinationId}`
    );
  }
}
