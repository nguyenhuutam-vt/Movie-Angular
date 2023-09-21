import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
    this.submitForm();
  }
  constructor(
    private service: MovieApiServiceService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({
      name: 'description',
      content: 'search here movies like avatar,war etc',
    });
  }
  searchResult: any[] = [];
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((res: any) => {
      console.log(res.results, 'search');
      this.searchResult = res.results;
    });
  }
}
