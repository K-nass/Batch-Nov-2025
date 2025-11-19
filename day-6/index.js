function throttle(fn, limit) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


document.getElementById("button").addEventListener(
  "click",
  throttle(() => {
    console.log("API request sent");
  }, 2000)
);

const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

function search(query) {
  resultsDiv.textContent = `Searching for: ${query}`;
}

const debouncedSearch = debounce((e) => {
  search(e.target.value);
}, 300);

searchInput.addEventListener("input", debouncedSearch);
