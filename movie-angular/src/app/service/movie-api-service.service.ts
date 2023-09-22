import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  private data: any[] = [];
  constructor(private http: HttpClient) {}
  baseurl = 'https://api.themoviedb.org/3';
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';

  //bannerapidata

  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }
  // trendingmovieData
  // trendingmovieapidata
  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`
    );
  }
  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(
      `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }

  //getMovieDetail
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}?api_key=${this.apikey}`
    );
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  private totalItem = 100;
  getItems(page = 1, itemPerPage = 10): Observable<string[]> {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const items = [];
    for (let i = startIndex; i < endIndex; i++) {
      if (i < this.totalItem) {
        items.push(`Item${i + 1}`);
      }
    }
    return of(items).pipe(delay(500));
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }

  // getData(startIndex: number, endIndex: number , data: any):  Observable<any>  {
  //   // Trích xuất phần tử từ mảng ban đầu dựa trên startIndex và endIndex
  //   return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`).slice(startIndex, endIndex);
  // }
}
