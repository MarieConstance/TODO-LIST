// Récupérer le formulaire et ajouter un écouteur d'événement pour la soumission
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Récupérer les valeurs des champs du formulaire
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const motdepass = document.getElementById("motdepass").value;

    // Vérifier si les champs sont remplis
    if (nom && email && motdepass) {
        // Créer un objet utilisateur avec les données
        const utilisateur = {
            nom,
            email,
            motdepass
        };

        // Stocker l'utilisateur dans le localStorage (converti en JSON)
        localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

        // Rediriger l'utilisateur vers une page de confirmation ou autre
        alert("Inscription réussie !");
        // Vous pouvez ajouter ici une redirection vers une page de confirmation ou de connexion.
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});