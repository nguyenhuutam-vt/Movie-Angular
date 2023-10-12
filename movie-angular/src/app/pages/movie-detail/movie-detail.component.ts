import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  getMovieDetail: any;
  getMovieVideoDetail: any;
  getMovieCastDetail: any[] = [];

  public pageSize = 3;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParama');
    this.getMovie(getParamId);
    this.getMovieVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute,
    private http: HttpClient
  ) {}

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((res: any) => {
      console.log(res, 'getdetail');
      this.getMovieDetail = res;
    });
  }

  getMovieVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((res: any) => {
      console.log(res.results, 'movieVideo');

      res.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoDetail = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((res: any) => {
      console.log(res.cast, 'cast');
      this.getMovieCastDetail = res.cast;
    });
  }

  // @ViewChild('mbscList') list: MbscListview;
  // data = [];
  // showMore = true;

  // listviewSettings: MbscListviewOptions = {
  //   theme: 'ios',
  //   themeVariant: 'light',
  //   animateAddRemove: false,
  //   enhance: true,
  //   swipe: false,
  //   striped: true,
  // };

  // formSettings: MbscFormOptions = {
  //   theme: 'ios',
  //   themeVariant: 'light',
  // };

  // getMovies() {
  //   const movies = this.data;

  //   this.showMore = false;

  //   if (this.list) {
  //     this.list.instance.showLoading();
  //   }

  //   this.http
  //     .jsonp(
  //       'https://trial.mobiscroll.com/loadmore/?length=' + (movies.length + 10),
  //       'callback'
  //     )
  //     .subscribe((resp: any) => {
  //       for (let i = 0; i < resp.length; ++i) {
  //         const item = resp[i];

  //         // movies.push({
  //         //   id: item.id,
  //         //   title: item.title,
  //         // });
  //       }

  //       this.showMore = true;
  //       this.list.instance.hideLoading();

  //       if (movies.length >= 100) {
  //         this.showMore = false;
  //       }
  //     });
  // }
}
