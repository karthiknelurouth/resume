
function validate() {
    let eq = document.getElementById("eq").value;
    let py = document.getElementById("py").value;
    let sp = document.getElementById("sp").value;
    let pd = document.getElementById("pd").value;

    if (eq == "") {
        alert("Enter educational alifications");
        return false;
    }

    if (py == "") {
        alert("Enter passout year");
        return false;
    }

    if (sp == "") {
        alert("Enter skills possessed");
        return false;
    }

    if (pd == "") {
        alert("Enter projects done");
        return false;
    }

    alert("Successful submission");
    return true;
}
