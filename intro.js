window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("loaded");
    console.log("start animation")
    document.querySelector("#mand_sprite").classList.add("walk");
    setTimeout("location.href = 'forside.html';", 5000);
}
