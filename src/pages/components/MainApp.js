import React from 'react';
import gh_icon from '../../img/gh-icon.png';

export default function MainApp() {
  const mainApp = {
    app_name: 'Ubiquitous',
    app_subtitle: 'JS/Handlebars/SASS/Express',
    app_img_URL:
      'https://raw.githubusercontent.com/Myuze/ubiquitous-happiness/main/ub-hero.png',
    app_link_URL: 'https://ubiquitous-p2.herokuapp.com/',
    app_repo_URL: 'https://github.com/Myuze/ubiquitous-happiness',
  };
  return (
    <div id='main-app'>
      <a href={mainApp.app_link_URL}>
        <div className='app-text'>
          <h4>{mainApp.app_name}</h4>
          <p>{mainApp.app_subtitle}</p>
        </div>
        <img src={mainApp.app_img_URL} alt={mainApp.app_name} />
      </a>
      <a className='gh-link' href={mainApp.app_repo_URL}>
        <img src={gh_icon} alt='Github Icon' />
      </a>
    </div>
  );
}
