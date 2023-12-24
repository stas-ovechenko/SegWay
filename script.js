document.getElementById('btn').addEventListener('click', onClickBtn);
function onClickBtn() {
    document.getElementById('menu').classList.toggle('visible');
    document.getElementById('btn').classList.toggle('visible');
    document.getElementById('body').classList.toggle('lock')
}