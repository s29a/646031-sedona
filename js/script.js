var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
var arrivalDate = form.querySelector("[name=arrival-date]");
var departureDate = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[name=count-of-adults]");
var childrens = form.querySelector("[name=count-of-childrens]");
var isStorageSupport = true;
var storageAdults = "";
var storageChildrens = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildrens = localStorage.getItem("childrens");
} catch (err) {
  isStorageSupport = false;
}

form.classList.toggle("search-form-hide");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-hide");
  if (form.classList.contains("search-form-error")) {
    form.classList.remove("search-form-error");
  }

  if (storageAdults ) {
    adults.value = storageAdults;
  }
  if (storageChildrens ) {
    childrens.value = storageChildrens;
  }

  arrivalDate.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adults.value || !childrens.value) {
    evt.preventDefault();
    if (form.classList.contains("search-form-error")) {
      form.classList.remove("search-form-error");
    }
    form.offsetWidth = form.offsetWidth;
    form.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("childrens", childrens.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains("search-form-hide")) {
      form.classList.remove("search-form-hide");
      if (form.classList.contains("search-form-error")) {
        form.classList.remove("search-form-error");
      }
    }
  }
});
