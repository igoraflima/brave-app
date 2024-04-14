import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly BRAVE_PATH = environment.BRAVE_PATH;

  public find(url: string, params?: any): Observable<any> {
    console.log(this.getOptions(params))
   return this.http.get(this.getFullUrl(url), this.getOptions(params));
  }

  public save(url: string, body: any): Observable<any> {
    return this.http.post(this.getFullUrl(url), body);
   }

  private getFullUrl(url: string) {
    return this.BRAVE_PATH + url;
  }

  private getOptions(params?: any) {
    return {
      params: new HttpParams({fromObject: params})
    }
  }
}
