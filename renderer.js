document.getElementById("form").onsubmit = async function teste() {
    const resp = await window.service.teste();
    alert(resp);
};