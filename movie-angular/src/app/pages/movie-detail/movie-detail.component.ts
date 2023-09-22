import { Component, OnInit } from '@angular/core';
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
    private router: ActivatedRoute
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
}
