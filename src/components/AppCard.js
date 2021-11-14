import React from 'react';

export default function AppCard() {
  const app = {
    "app_name": "Team Profile Generator",
    "app_subtitle": "Javascript/Inquirer",
    "app_img_URL": "https://github.com/Myuze/team-profile-gen/raw/main/team_profile.jpg",
    "app_repo_URL": "https://github.com/Myuze/team-profile-gen"
  }
  return (
    <div id="app-1" class="app-card">
      <a href={ app.app_repo_URL }>
        <div class="app-text">
          <h5>{ app.app_name }</h5>
          <p>
              { app.app_subtitle }
          </p>
        </div>
        <img src={ app.app_img_URL } alt={ app.app_name } />
      </a>
    </div>
  );
};
