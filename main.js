let user = {};

validatePassword = (password) => {
    if (password.length < 10) {
        return "Pasord må har 10 tegn eller flere";
    } else if (!/[A-Å]/.test(password)) {
        return "Passord må ha minst én stor bokstav"
    } else if (!/[a-å]/.test(password)) {
        return "Passord må ha minst én liten bokstav"
    }   else if (!/[0-9]/.test(password)) {
        return "Passord må ha minst ett tall"
    } else if (!/[@#$%^&+=!]/.test(password)) {
        return "Passord må ha minst ett spesialtegn"
    }
};

getUser = () => {
    const password = document.getElementById('passord').value;

    const passwordError = document.getElementById("passord_error");
    
    const error = validatePassword(password);

    if (error) {
        passwordError.textContent = error;
    } else {
        passwordError.textContent = "";

        user.fornavn = document.getElementById("fornavn").value;
        user.etternavn = document.getElementById("etternavn").value;
        user.adresse = document.getElementById("adresse").value;
        user.postnummer = document.getElementById("postnummer").value;
        user.poststed = document.getElementById("poststed").value;
        user.telefon = document.getElementById("telefon").value;
        user.passord = password;

        console.log(user);
    };
    
};