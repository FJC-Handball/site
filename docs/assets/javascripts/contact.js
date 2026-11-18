
document.addEventListener("submit", function (event) {
  const form = event.target;

  if (form.id !== "fjc-contact-form") return;

  event.preventDefault();

  // Adresse e-mail du club
  const destinataire = "contact.fjchandball.fr";

  const nom = form.elements["nom"].value.trim();
  const email = form.elements["email"].value.trim();
  const sujet = form.elements["sujet"].value;
  const message = form.elements["message"].value.trim();

  const objet = "Contact FJC Handball - " + sujet;

  const contenu =
    "Nom : " + nom + "\n" +
    "Email : " + email + "\n" +
    "Sujet : " + sujet + "\n\n" +
    "Message :\n" + message;

  const lien =
    "mailto:" + destinataire +
    "?subject=" + encodeURIComponent(objet) +
    "&body=" + encodeURIComponent(contenu);

  window.location.href = lien;
});
