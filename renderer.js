document.getElementById("form").onsubmit = async function (event) {
    event.preventDefault();
    const namespace = document.getElementById("namespace").value;
    const resp = await window.service.getPods(namespace);
    alert(resp);
    console.log(resp);
};