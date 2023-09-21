import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParama');

    this.getMovie(getParamId);
  }
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((res: any) => {
      console.log(res, 'getdetail');
    });
  }
}
