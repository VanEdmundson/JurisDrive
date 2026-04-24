let savebutton= document.getElementById("saveProfile")
let usernameinput= document.getElementById("username")
let userstageinput= document.getElementById("userstage")
let displayname= document.getElementById("displayname")
let displaystage= document.getElementById("displaystage")

function load() {
    let savedname= localStorage.getItem("jurisdrivename")
    let savedstage= localStorage.getItem("jurisdrivestage")

    if (savedname !== null) {
        displayname.textContent= savedname;
        usernameinput.value= savedname;
    }

    if (savedstage !== null) {
        displaystage.textContent= savedstage;
        userstageinput.value= savedstage;
    }
    }
savebutton.addEventListener("click", function() {
    let name= usernameinput.value;
    let stage= userstageinput.value;
    localStorage.setItem("jurisdrivename", name);
    localStorage.setItem("jurisdrivestage", stage);
    displayname.textContent= name;
    displaystage.textContent= stage;
    });
load();