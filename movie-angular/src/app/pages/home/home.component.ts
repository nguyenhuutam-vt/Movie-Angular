import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
  }
  constructor(private service: MovieApiServiceService) {}

  //banner data
  bannerArray: any[] = [];
  trendingArray: any[] = [];
  bannerData() {
    this.service.bannerApiData().subscribe((res: any) => {
      this.bannerArray = res.results;
      console.log(res.results);
    });
  }

  // trendingmovieData
  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((res: any) => {
      this.trendingArray = res.results;
      console.log(res.results, 'trending');
    });
  }
}
