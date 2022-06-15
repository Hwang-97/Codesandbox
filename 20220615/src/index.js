const clockTitle = document.querySelector(".js-clock");
document.body.appendChild(clockTitle);
let d, h, m, s;
let cristmas, now, date;
function get_date() {
  now = new Date();
  cristmas = new Date(now.getFullYear(), "12", "25");
  date = new Date(cristmas - now);
  d = Math.floor(date / 1000 / 60 / 60 / 24);
  h = Math.floor((date / 1000 / 60 / 60) % 24);
  m = Math.floor((date / 1000 / 60) % 60);
  s = Math.floor((date / 1000) % 60);
}
setInterval(() => {
  get_date();
  clockTitle.innerText = d + "d " + h + "h " + m + "m " + s + "s";
}, 1000);
