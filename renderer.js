document.getElementById("botao").onclick = async function teste() {
    const resp = await window.service.teste();
    alert(resp);
};