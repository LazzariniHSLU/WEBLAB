import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getTrendingRepos(): Observable<any[]>{
    const url = "https://github-trending-api.now.sh/";
    return this.http.get<any[]>(url);
  }
}
