const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailFormContainer = document.getElementById("email-form-container");

const personalInfo = document.getElementById("personal-info");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "Vui lòng nhập email.";
    emailInput.focus();
    return;
  }

  if (!emailRegex.test(email)) {
    emailError.textContent = "Email không đúng định dạng.";
    emailInput.focus();
    return;
  }

  emailError.textContent = "";

  emailFormContainer.classList.add("hide");

  personalInfo.classList.remove("hide");
});

emailInput.addEventListener("input", function () {
  emailError.textContent = "";
});

const toggleButtons = document.querySelectorAll(".toggle-info");

toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = this.closest(".info-items");

    const content = card.querySelector(".info-content");

    const isHidden = content.classList.contains("hide");

    if (isHidden) {
      content.classList.remove("hide");

      this.textContent = "Ẩn bớt";

      this.setAttribute("aria-expanded", "true");
    } else {
      content.classList.add("hide");

      this.textContent = "Xem thêm";

      // Cập nhật trạng thái
      this.setAttribute("aria-expanded", "false");
    }
  });
});
