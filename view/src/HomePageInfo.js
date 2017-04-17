import React from 'react';

const HomePageInfo = props => (
  <div>
    <div className="home-flex-container">
      <div>
        <img
          className="cute-pic"
          src="https://freeiconshop.com/wp-content/uploads/edd/code-flat.png"
          alt="presentation"
        />
      </div>
      <div className="intro-to-me">
        <h1>Taryn Dicomitis</h1>
        <h5>Full Stack Javascript Developer</h5>
        <a
          href="https://twitter.com/tarynrenee13"
          class="twitter-follow-button"
          data-show-count="false"
        >
          <img
            className="twitter-pic"
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"
            alt=""
          />
          Twiter
        </a>
        <script async src="//platform.twitter.com/widgets.js" charset="utf-8" />
        <a
          href="https://github.com/tdicomitis"
          class="github-follow-button"
          data-show-count="false"
        >
          <img
            className="github-pic"
            src="http://datascience.massmutual.com/static/img/github-footer.png"
            alt=""
          />
          GitHub
        </a>
        <script async src="//platform.twitter.com/widgets.js" charset="utf-8" />
      </div>
    </div>
    <div className="hire-container">
      <div className="av-for-hire">
        <h4>Available For Hire!</h4>
      </div>
      <div>
        <p>
          <img
            className="email-icon"
            src="https://cdn1.iconfinder.com/data/icons/simple-icons/2048/email-2048-black.png"
            alt=""
          />
          dicomitis13@gmail.com
        </p>
        <p>
          <img
            className="phone-icon"
            src="http://www.valledelcocora.com.co/img/iconos/fijo-n.png"
            alt=""
          />
          406-396-6094
        </p>
      </div>
    </div>
  </div>
);

export default HomePageInfo;
