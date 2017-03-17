function MissingInfos(mess)
{
    document.getElementById(mess).innerHTML = ("Tous les champs sont obligatoires");
}
function WrongInfos(mess, input)
{
    document.getElementById(mess).innerHTML = ("Votre adresse email n'est pas valide, ou mal recopié");
    document.getElementById(input).style.background = "red";
}
function WrongNumber(mess, input)
{
    if (mess == "Error5")
    {
        document.getElementById(mess).innerHTML = ("Votre numéro de téléphone doit faire 10 chiffre minimum et commencer par 03");
    }
    else if (mess == "Error6")
    {
        document.getElementById(mess).innerHTML = ("Votre numéro de téléphone doit faire 10 chiffre minimum et commencer par 06 ou 07");
    }
    document.getElementById(input).style.background = "red";

}
function FineInfos(mess, input)
{
    document.getElementById(mess).innerHTML = ("*");
    document.getElementById(input).style.background = "white";
}

function checkForm() {
    var nom = document.forms["monForm"]["nom"].value;
    var prenom = document.forms["monForm"]["prenom"].value;
    var tel = document.forms["monForm"]["tel"].value;
    var tel_p = document.forms["monForm"]["tel_p"].value;
    var email = document.forms["monForm"]["email"].value;
    var email2 = document.forms["monForm"]["email2"].value;
    var regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    number = parseInt(tel);
    number_p = parseInt(tel_p);

    if ((nom != "") && (prenom != "") && (tel != "") && (email != "") && (email2 != "") && (tel_p != ""))
    {
        if ((regexEmail.test(email)) && (email == email2) && (tel.length == 10) && (tel[0] == 0) && (tel[1] == 3) && (tel_p.length == 10) && (tel_p[0] == 0) && (tel_p[1] == 6 || tel_p[1] == 7) && (!isNaN(tel) && (!isNaN(tel_p))))   
        {
            alert("Bienvenue" + " " + nom + " " + prenom);
        }
        if (!regexEmail.test(email) || (email != email2))
        {
            WrongInfos("Error4", "area3");
            WrongInfos("Error3", "area4");
        }
        else
        {
            FineInfos("Error4", "area3");
            FineInfos("Error3", "area4");
        }
        if ((tel.length != 10) || (tel[0] != 0) || (tel[1] != 3) || (isNaN(tel)))
        {
            WrongNumber("Error5", "area5");
        }
        else
        {
            FineInfos("Error5", "area5");
        }
        if ((tel_p.length != 10) || (tel_p[0] != 0) && (tel_p[1] != 6 || tel_p[1] != 7) || (isNaN(tel_p)))
        {
            WrongNumber("Error6", "area6");
        }
        else
        {
            FineInfos("Error6", "area6");
        }

    }
    else
    {
        MissingInfos("missing");
    }

    return false
}
//TP
//
// check email
// check email1 = email2
// check tel 
// le formulaire doit avoir tous les champs obligatoires
// les champs doivent se mettre en rouge s'ils ont une erreur