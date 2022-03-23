document.addEventListener("DOMContentLoaded", () => {
  let count = 1;

  // SRP
  const updateCounter = function (c) {
    document.querySelector("#counter").value = c;
  };

  const up = () => {
    count++;
    updateCounter(count);
  };

  const down = () => {
    if (count > 0) {
      count--;
    }
    updateCounter(count);
  };

  document.querySelector("#plus").addEventListener("click", up);
  document.querySelector("#minus").addEventListener("click", down);
});
