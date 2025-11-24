document.querySelectorAll(".wishlist-btn").forEach(btn => {
  const id = btn.dataset.id;
  const icon = btn.querySelector("i");

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Load saved state
  if (wishlist.includes(id)) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    icon.style.color = "red";
  }

  btn.addEventListener("click", () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.includes(id)) {
      // remove
      wishlist = wishlist.filter(item => item !== id);
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      icon.style.color = "";
    } else {
      // add
      wishlist.push(id);
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.style.color = "red";
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  });
});
