export interface GithubProfile {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  company: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  created_at: string;
  html_url: string;
}
