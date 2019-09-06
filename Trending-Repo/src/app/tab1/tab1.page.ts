import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  repos: any[] = [];
  
  ngOnInit(): void {
    this.githubService.getTrendingRepos().subscribe((repo) => this.repos = repo);
  }

  constructor(private githubService : GithubApiService) {}
}
