import React from 'react';
import gh_icon from '../img/gh-icon.png';

export default function AppCard() {
  const apps = [
    {
      "app_name": "Tech Blog",
      "app_subtitle": "JS/Bootstrap/SASS/Handlebars",
      "app_img_URL": "https://github.com/Myuze/tech-blog-fm/raw/main/tech-blog.jpg",
      "app_link_URL": "https://tech-blog-fm.herokuapp.com/",
      "app_repo_URL": "https://github.com/Myuze/tech-blog-fm",
    },
    {
      "app_name": "Team Profile Generator",
      "app_subtitle": "Javascript/Inquirer",
      "app_img_URL": "https://github.com/Myuze/team-profile-gen/raw/main/team_profile.jpg",
      "app_link_URL": "https://github.com/Myuze/team-profile-gen",
      "app_repo_URL": "https://github.com/Myuze/team-profile-gen",
    },
    {
      "app_name": "Weather Dashboard",
      "app_subtitle": "Bootstrap/Javascript",
      "app_img_URL": "https://github.com/Myuze/weather-fm/raw/main/weather.jpg",
      "app_link_URL": "https://github.com/Myuze/weather-fm",
      "app_repo_URL": "https://github.com/Myuze/weather-fm",
    },
    {
      "app_name": "Recipe Champion",
      "app_subtitle": "Javascript/Foundation CSS",
      "app_img_URL": "https://github.com/Myuze/recipe-champion/raw/main/recipe-champion.jpg",
      "app_link_URL": "https://myuze.github.io/recipe-champion/docs/index.html",
      "app_repo_URL": "https://github.com/Myuze/recipe-champion",
    },
    {
      "app_name": "Note Taker",
      "app_subtitle": "JS/Express",
      "app_img_URL": "https://github.com/Myuze/notetaker-fm/raw/main/notetaker.jpg",
      "app_link_URL": "https://notetaker-fm.herokuapp.com/",
      "app_repo_URL": "https://github.com/Myuze/notetaker-fm",
    }
  ]
  
  return (
    <div className="app-container">
      {apps.map((app, i) => (
        <div key={i} className="app-card">
          <a href={ app.app_link_URL }>
            <div className="app-text">
              <h5>{ app.app_name }</h5>
              <p>
                  { app.app_subtitle }
              </p>
            </div>
            <img src={ app.app_img_URL } alt={ app.app_name } />
          </a>
          <a className="gh-link" href={ app.app_repo_URL }>
            <img src={ gh_icon } alt="Github Icon" />
          </a>
        </div>
      ))}
    </div>
  );
};
