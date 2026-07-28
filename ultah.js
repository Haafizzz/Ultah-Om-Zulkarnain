var cakeSvg = document.getElementById("cakeSvg");
var cakeHint = document.getElementById("cakeHint");
var blown = false;

cakeSvg.addEventListener("click", function () {
  if (blown) return;
  blown = true;
  cakeHint.textContent = "Tiuuup... 💨";

  var flames = document.querySelectorAll(".flame");
  flames.forEach(function (f) {
    f.classList.add("blowing");
  });

  if (window.confetti) {
    confetti({
      particleCount: 30,
      spread: 40,
      startVelocity: 20,
      origin: { x: 0.5, y: 0.62 },
      colors: ["#FFC93C", "#FF7A5C", "#3FA9F5"],
    });
  }

  setTimeout(function () {
    flames.forEach(function (f) {
      f.classList.remove("blowing");
      f.style.opacity = "0";
    });
    document.querySelectorAll(".smoke").forEach(function (s) {
      s.classList.add("show");
    });
    cakeHint.textContent = "Horeee, lilinnya padam! 🎉";

    if (window.confetti) {
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    }
    setTimeout(function () {
      document.getElementById("revealMsg").classList.add("show");
    }, 300);
  }, 950);
});
