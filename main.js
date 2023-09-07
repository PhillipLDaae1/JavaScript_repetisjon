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

        //console.log(user);

        let exportElement = document.getElementById("user_export")

        i = 0;

        while (i < Object.keys(user).length) {
            exportElement.appendChild(document.createElement("p"));
            exportElement.lastChild.innerHTML = Object.keys(user)[i] + ":" + Object.values(user)[i];
            i++;
        }

        exportElement.classList.add("export");

        let input1 = document.getElementById("fornavn");
        let input2 = document.getElementById("etternavn");
        let input3 = document.getElementById("adresse");
        let input4 = document.getElementById("postnummer");
        let input5 = document.getElementById("poststed");
        let input6 = document.getElementById("telefon");
        let input7 = document.getElementById("passord");

        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
        input6.value = "";
        input7.value = "";
    };
    
};

