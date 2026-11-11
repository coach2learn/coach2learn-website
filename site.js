// MAILERLITE_PLACEHOLDER
// While the form action is "#mailerlite-signup", submitting does nothing
// with the address. Replace the action with the MailerLite endpoint and
// this handler gets out of the way.
document.querySelectorAll("form.newsletter").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    if (form.getAttribute("action") !== "#mailerlite-signup") return;
    event.preventDefault();
    var status = form.querySelector(".form-status");
    if (status) status.hidden = false;
  });
});
