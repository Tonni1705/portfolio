/*
0 - 600px:      Phone
600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :      Big desktop
$breakpoint arguement choices:
- phone
- tab-port
- tab-land
- big-desktop

Inside media queries 1em is always 16px i.e 1em = 16px at every screen size only inside media queries
*/
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: inherit; }

html {
  font-size: 62.5%;
  scroll-behavior: smooth; }
  @media only screen and (max-width: 75em) {
    html {
      font-size: 59%; } }
  @media only screen and (max-width: 56.25em) {
    html {
      font-size: 56%; } }
  @media only screen and (min-width: 112.5em) {
    html {
      font-size: 65%; } }

body {
  box-sizing: border-box;
  position: relative;
  line-height: 1.5;
  font-family: sans-serif;
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: 'Source Sans Pro', sans-serif; }

a {
  text-decoration: none;
  color: inherit; }

li {
  list-style: none; }

input:focus,
button:focus,
a:focus,
textarea:focus {
  outline: none; }

button {
  border: none;
  cursor: pointer; }

textarea {
  resize: none; }

.heading-primary {
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center; }
  @media only screen and (max-width: 5.5em) {
    .heading-primary {
      font-size: 4.5rem; } }

.heading-sec__mb-bg {
  margin-bottom: 11rem; }
  @media only screen and (max-width: 56.25em) {
    .heading-sec__mb-bg {
      margin-bottom: 8rem; } }

.heading-sec__mb-med {
  margin-bottom: 9rem; }
  @media only screen and (max-width: 56.25em) {
    .heading-sec__mb-med {
      margin-bottom: 8rem; } }

.heading-sec__main {
  display: block;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative; }
  .heading-sec__main--lt {
    color: #fff; }
    .heading-sec__main--lt::after {
      content: '';
      background: #fff !important; }
  .heading-sec__main::after {
    content: '';
    position: absolute;
    top: calc(100% + 1.5rem);
    height: 5px;
    width: 3rem;
    background: #0062b9;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px; }
    @media only screen and (max-width: 37.5em) {
      .heading-sec__main::after {
        top: calc(100% + 1.2rem); } }

.heading-sec__sub {
  display: block;
  text-align: center;
  color: #777;
  font-size: 2rem;
  font-weight: 500;
  max-width: 80rem;
  margin: auto;
  line-height: 1.6; }
  @media only screen and (max-width: 37.5em) {
    .heading-sec__sub {
      font-size: 1.8rem; } }
  .heading-sec__sub--lt {
    color: #eee; }

.heading-sm {
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 1px; }

.main-container {
  max-width: 120rem;
  margin: auto;
  width: 92%; }

.btn {
  background: #fff;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform .3s; }
  .btn:hover {
    transform: translateY(-3px); }
  .btn--bg {
    padding: 1.5rem 8rem;
    font-size: 2rem; }
  .btn--med {
    padding: 1.5rem 5rem;
    font-size: 1.6rem; }
  .btn--theme {
    background: #0062b9;
    color: #fff; }
  .btn--theme-inv {
    color: #0062b9;
    background: #fff;
    border: 2px solid #0062b9;
    box-shadow: none;
    padding: calc(1.5rem - 2px) calc(5rem - 2px); }

.sec-pad {
  padding: 12rem 0; }
  @media only screen and (max-width: 56.25em) {
    .sec-pad {
      padding: 8rem 0; } }

.text-primary {
  color: #fff;
  font-size: 2.2rem;
  text-align: center;
  width: 100%;
  line-height: 1.6; }
  @media only screen and (max-width: 37.5em) {
    .text-primary {
      font-size: 2rem; } }

.d-none {
  display: none; }

.home-hero {
  color: #fff;
  background: linear-gradient(to right, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)), url(../../assets/svg/common-bg.svg);
  background-position: center;
  height: 100vh;
  min-height: 80rem;
  max-height: 120rem;
  position: relative; }
  @media only screen and (max-width: 37.5em) {
    .home-hero {
      height: unset;
      min-height: unset; } }
  .home-hero__socials {
    position: absolute;
    top: 50%;
    border: 2px solid #eee;
    border-left: 2px solid #eee;
    transform: translateY(-50%); }
    @media only screen and (max-width: 56.25em) {
      .home-hero__socials {
        display: none; } }
  .home-hero__mouse-scroll-cont {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%); }
    @media only screen and (max-width: 37.5em) {
      .home-hero__mouse-scroll-cont {
        display: none; } }
  .home-hero__social {
    width: 5rem; }
  .home-hero__social-icon-link {
    width: 100%;
    display: block;
    padding: 1.2rem;
    border-bottom: 2px solid #eee;
    transition: background .3s; }
    .home-hero__social-icon-link:hover {
      background: rgba(255, 255, 255, 0.1); }
    .home-hero__social-icon-link--bd-none {
      border-bottom: 0; }
  .home-hero__social-icon {
    width: 100%; }
  .home-hero__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90rem;
    width: 92%; }
    @media only screen and (max-width: 37.5em) {
      .home-hero__content {
        padding: 19rem 0 13rem 0;
        margin: auto;
        position: static;
        transform: translate(0, 0); } }
  .home-hero__info {
    margin: 3rem auto 0 auto;
    max-width: 80rem; }
  .home-hero__cta {
    margin-top: 5rem;
    text-align: center; }

.about {
  background: #fafafa; }
  .about__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem; }
    @media only screen and (max-width: 56.25em) {
      .about__content {
        grid-template-columns: 1fr;
        grid-gap: 8rem; } }
    .about__content-title {
      font-weight: 700;
      font-size: 2.8rem;
      margin-bottom: 3rem; }
      @media only screen and (max-width: 37.5em) {
        .about__content-title {
          font-size: 2.4rem; } }
    .about__content-details-para {
      font-size: 1.8rem;
      color: grey;
      max-width: 60rem;
      line-height: 1.7;
      margin-bottom: 1rem; }
      .about__content-details-para--hl {
        font-weight: 700;
        margin: 0 3px; }
      .about__content-details-para:last-child {
        margin-bottom: 4rem; }

.projects__row {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 5rem;
  margin-bottom: 11rem; }
  @media only screen and (max-width: 56.25em) {
    .projects__row {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin-bottom: 8rem; } }
  @media only screen and (max-width: 56.25em) {
    .projects__row {
      text-align: center; } }
  .projects__row:last-child {
    margin-bottom: 0; }
  .projects__row-img-cont {
    overflow: hidden; }
  .projects__row-img {
    width: 100%;
    display: block;
    object-fit: cover; }
  .projects__row-content {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start; }
    @media only screen and (max-width: 56.25em) {
      .projects__row-content {
        align-items: center; } }
    .projects__row-content-title {
      font-weight: 700;
      font-size: 2.8rem;
      margin-bottom: 2rem; }
      @media only screen and (max-width: 37.5em) {
        .projects__row-content-title {
          font-size: 2.4rem; } }
    .projects__row-content-desc {
      font-size: 1.8rem;
      color: grey;
      max-width: 60rem;
      line-height: 1.7;
      margin-bottom: 3rem; }
      @media only screen and (max-width: 37.5em) {
        .projects__row-content-desc {
          font-size: 1.7rem; } }

.contact {
  background: linear-gradient(to right, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)), url(../../assets/svg/common-bg.svg);
  background-size: cover;
  background-position: center; }
  .contact__form-container {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: white;
    padding: 4rem;
    margin-top: 6rem;
    max-width: 80rem;
    text-align: right;
    width: 95%;
    border-radius: 5px;
    margin: 5rem auto 0 auto; }
    @media only screen and (max-width: 37.5em) {
      .contact__form-container {
        padding: 3rem; } }
  .contact__form-field {
    margin-bottom: 4rem; }
    @media only screen and (max-width: 37.5em) {
      .contact__form-field {
        margin-bottom: 3rem; } }
  .contact__form-label {
    color: #666;
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 1rem;
    display: block;
    text-align: left; }
  .contact__form-input {
    color: #333;
    padding: 2rem;
    width: 100%;
    border: 1px solid #ebebeb;
    font-size: 1.6rem;
    letter-spacing: 0px;
    background: #f0f0f0;
    border-radius: 5px;
    font-weight: 600;
    /* Code for Modern Browsers */
    /* Code for WebKit, Blink, Edge */
    /* Code for Internet Explorer 10-11 */
    /* Code for Microsoft Edge */
    /* Code for Mozilla Firefox 4 to 18 */
    /* Code for Mozilla Firefox 19+ */ }
    .contact__form-input::placeholder {
      color: #999;
      font-weight: 600;
      font-size: 1.6rem; }
    .contact__form-input::-webkit-input-placeholder {
      color: #999;
      font-weight: 600;
      font-size: 1.6rem; }
    .contact__form-input:-ms-input-placeholder {
      color: #999;
      font-weight: 600;
      font-size: 1.6rem; }
    .contact__form-input::-ms-input-placeholder {
      color: #999;
      font-weight: 600;
      font-size: 1.6rem; }
    .contact__form-input:-moz-placeholder {
      opacity: 1;
      color: #999;
      font-weight: 600;
      font-size: 1.6rem; }
    .contact__form-input::-moz-placeholder {
      opacity: 1;
      color: #999;
      font-weight: 600;
      font-size: 1.6rem; }
  .contact__btn {
    width: 30%;
    padding: 2rem 4rem;
    font-size: 1.6rem; }
    @media only screen and (max-width: 37.5em) {
      .contact__btn {
        width: 100%; } }

.project-cs-hero {
  color: #fff;
  background: linear-gradient(to right, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)), url(../../assets/svg/common-bg.svg);
  background-size: cover;
  background-position: center;
  position: relative; }
  @media only screen and (max-width: 37.5em) {
    .project-cs-hero {
      height: unset;
      min-height: unset; } }
  .project-cs-hero__content {
    padding: 25rem 0 17rem 0;
    max-width: 90rem;
    width: 92%;
    margin: auto; }
    @media only screen and (max-width: 37.5em) {
      .project-cs-hero__content {
        padding: 19rem 0 13rem 0;
        margin: auto;
        position: static;
        transform: translate(0, 0); } }
  .project-cs-hero__info {
    margin: 3rem auto 0 auto;
    max-width: 80rem; }
  .project-cs-hero__cta {
    margin-top: 5rem;
    text-align: center; }

.project-details__content {
  padding: 8rem 0;
  max-width: 90rem;
  margin: auto; }
  .project-details__content-title {
    font-weight: 700;
    font-size: 2.8rem;
    margin-bottom: 3rem; }
    @media only screen and (max-width: 37.5em) {
      .project-details__content-title {
        font-size: 2.4rem; } }

.project-details__showcase-img-cont {
  width: 100%;
  margin-bottom: 6rem; }

.project-details__showcase-img {
  width: 100%; }

.project-details__content-main {
  width: 100%;
  max-width: 70rem;
  margin: auto; }

.project-details__desc {
  margin: 0 0 7rem 0; }
  .project-details__desc-para {
    font-size: 1.8rem;
    line-height: 1.7;
    color: grey;
    margin-bottom: 2rem; }

.project-details__tools-used {
  margin: 0 0 7rem 0; }
  .project-details__tools-used-list {
    display: flex;
    flex-wrap: wrap; }
  .project-details__tools-used-item {
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1.6rem;
    background: rgba(153, 153, 153, 0.2);
    border-radius: 5px;
    font-weight: 600;
    color: #777; }

.project-details__links {
  margin: 0 0; }
  .project-details__links-btn {
    margin-right: 2rem; }
    @media only screen and (max-width: 37.5em) {
      .project-details__links-btn {
        margin-right: 0;
        width: 70%;
        margin-bottom: 2rem;
        text-align: center; } }
    .project-details__links-btn:last-child {
      margin: 0; }
      @media only screen and (max-width: 37.5em) {
        .project-details__links-btn:last-child {
          margin: 0; } }

.header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: #000;
  background: #fff;
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1); }
  .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem; }
    @media only screen and (max-width: 56.25em) {
      .header__content {
        padding: 0 2rem; } }
  .header__logo-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #333;
    transition: color .3s; }
    .header__logo-container:hover {
      color: #0062b9; }
  .header__logo-img-cont {
    width: 5rem;
    height: 5rem;
    border-radius: 50px;
    overflow: hidden;
    margin-right: 1.5rem;
    background: #0062b9; }
    @media only screen and (max-width: 56.25em) {
      .header__logo-img-cont {
        width: 4.5rem;
        height: 4.5rem;
        margin-right: 1.2rem; } }
  .header__logo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block; }
  .header__logo-sub {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px; }
  .header__links {
    display: flex; }
    @media only screen and (max-width: 37.5em) {
      .header__links {
        display: none; } }
  .header__link {
    padding: 2.2rem 3rem;
    display: inline-block;
    font-size: 1.6rem;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    transition: color .3s; }
    .header__link:hover {
      color: #0062b9; }
    @media only screen and (max-width: 56.25em) {
      .header__link {
        padding: 3rem 1.8rem;
        font-size: 1.5rem; } }
  .header__main-ham-menu-cont {
    display: none;
    width: 3rem;
    padding: 2.2rem 0; }
    @media only screen and (max-width: 37.5em) {
      .header__main-ham-menu-cont {
        display: block; } }
  .header__main-ham-menu {
    width: 100%; }
  .header__main-ham-menu-close {
    width: 100%; }
  .header__sm-menu {
    background: #fff;
    position: absolute;
    width: 100%;
    top: 100%;
    visibility: hidden;
    opacity: 0;
    transition: all .3s;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1); }
    .header__sm-menu--active {
      visibility: hidden;
      opacity: 0; }
      @media only screen and (max-width: 37.5em) {
        .header__sm-menu--active {
          visibility: visible;
          opacity: 1; } }
  .header__sm-menu-link a {
    display: block;
    text-decoration: none;
    padding: 2.5rem 3rem;
    font-size: 1.6rem;
    color: #333;
    text-align: right;
    border-bottom: 1px solid #eee;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: color .3s; }
    .header__sm-menu-link a:hover {
      color: #0062b9; }
  .header__sm-menu-link:first-child a {
    border-top: 1px solid #eee; }
  .header__sm-menu-link-last {
    border-bottom: 0; }

.main-footer {
  background: #000;
  color: #fff; }
  .main-footer__upper {
    display: flex;
    justify-content: space-between;
    padding: 8rem 0; }
    @media only screen and (max-width: 56.25em) {
      .main-footer__upper {
        padding: 6rem 0; } }
    @media only screen and (max-width: 37.5em) {
      .main-footer__upper {
        display: block; } }
  .main-footer__row-1 {
    order: 2; }
    @media only screen and (max-width: 56.25em) {
      .main-footer__row-1 {
        margin-bottom: 5rem; } }
  .main-footer__row-2 {
    width: 40%;
    order: 1;
    max-width: 50rem; }
    @media only screen and (max-width: 56.25em) {
      .main-footer__row-2 {
        width: 100%; } }
  .main-footer__short-desc {
    margin-top: 2rem;
    color: #eee;
    font-size: 1.5rem;
    line-height: 1.7; }
  .main-footer__social-cont {
    margin-top: 2rem; }
  .main-footer__icon {
    margin-right: 1rem;
    width: 2.5rem; }
    .main-footer__icon--mr-none {
      margin-right: 0; }
  .main-footer__lower {
    padding: 4rem 0;
    border-top: 1px solid #444;
    color: #eee;
    font-size: 1.2rem;
    text-align: left;
    text-align: center; }
    .main-footer__lower a {
      text-decoration: underline;
      font-weight: bold;
      margin-left: 2px; }
    @media only screen and (max-width: 56.25em) {
      .main-footer__lower {
        padding: 3.5rem 0; } }

.skills {
  display: flex;
  flex-wrap: wrap; }
  .skills__skill {
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1.6rem;
    background: rgba(153, 153, 153, 0.2);
    border-radius: 5px;
    font-weight: 600;
    color: #777; }

.mouse {
  width: 25px;
  height: 40px;
  border: 2px solid #eee;
  border-radius: 60px;
  position: relative;
  overflow: hidden; }
  .mouse::before {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #eee;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 1.3s infinite;
    -webkit-animation: wheel 1.3s infinite; }

@keyframes wheel {
  to {
    opacity: 0;
    top: 27px; } }

@-webkit-keyframes wheel {
  to {
    opacity: 0;
    top: 27px; } }

.cursor {
  display: inline-block;
  vertical-align: bottom;
  width: 1.6em;
  height: 1em;
  background-color: #fff;
  animation: blink 1s infinite;
}
.cursor-stale {
display: inline-block;
  vertical-align: bottom;
  width: 1.6em;
  height: 1em;
  background-color: #fff;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

label {
  margin-bottom: 10px;
}

input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  background-color: #2c6290;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #2c6290;
}


