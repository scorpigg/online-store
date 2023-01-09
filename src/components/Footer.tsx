import React from 'react';

export function Footer() {
  return (
    <footer>
      <div className="footer__left">
        <ul>
          <li>
            <img src="/img/logo-github.svg" alt="logo github" width="22" height="22" />
            <span className="footer__author">
              <a href="https://github.com/scorpigg" target="_blank" rel="noreferrer">
                Andrey Nikitin
              </a>
            </span>
          </li>
          <li>
            <img src="/img/logo-github.svg" alt="logo github" width="22" height="22" />
            <span className="footer__author">
              <a href="https://github.com/istairina" target="_blank" rel="noreferrer">
                Irina Migunova
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="footer__left">
        <span>2023</span>
      </div>
      <div className="footer__center">
        <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
          <img src="/img/logo-rss.svg" alt="logo rss" width="121" height="45" />
        </a>
      </div>
    </footer>
  );
}
