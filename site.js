// Posts the footer form to MailerLite. Without JavaScript the form still
// submits to the same endpoint, with the same fields.
var NEWSLETTER_SUCCESS = "Almost done. Check your inbox to confirm your subscription.";
var NEWSLETTER_ERROR = "Something went wrong. Please try again, or email tim@coach2learn.ca.";

document.querySelectorAll("form.newsletter").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var status = form.querySelector(".form-status");
    var button = form.querySelector('button[type="submit"]');
    if (button) button.disabled = true;
    if (status) {
      status.classList.remove("is-error");
      status.textContent = "";
    }

    var body = new URLSearchParams(new FormData(form)).toString();
    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Accept": "application/json"
      },
      body: body
    }).then(function (response) {
      return response.text().then(function (text) {
        var payload = null;
        try { payload = JSON.parse(text); } catch (e) { payload = null; }
        return { ok: response.ok, payload: payload };
      });
    }).then(function (result) {
      if (!result.ok) throw new Error("request failed");
      if (result.payload && result.payload.success === false) throw new Error("rejected");
      var done = document.createElement("p");
      done.className = "form-status";
      done.setAttribute("role", "status");
      done.setAttribute("aria-live", "polite");
      done.textContent = NEWSLETTER_SUCCESS;
      form.replaceWith(done);
    }).catch(function () {
      if (button) button.disabled = false;
      if (!status) return;
      status.classList.add("is-error");
      status.textContent = NEWSLETTER_ERROR;
    });
  });
});
