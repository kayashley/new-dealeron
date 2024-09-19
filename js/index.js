const navItem = document.querySelectorAll("li");

navItem.forEach((element) => {
  element.addEventListener("click", function () {
    // remove 'active' class from all 'li' elements
    navItem.forEach((el) => el.classList.remove("active"));

    // add 'active' class to the clicked 'li' element
    this.classList.add("active");
  });
});
