// document.addEventListener("DOMContentLoaded", function () {
//     const xhr = new XMLHttpRequest();
//     let runningCardPatch = "running-card.html"
//     xhr.open("GET", runningCardPatch, true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             document.getElementById("run-card-side").innerHTML = xhr.responseText;
//         }
//     };
//     xhr.send();
// });

document.getElementById('pengobatan').addEventListener('click', function () {
    document.querySelector('div[data-content="pengobatan"]').classList.remove('d-none');
    document.querySelector('div[data-content="pencegahan"]').classList.add('d-none');
    document.querySelector('div[data-content="penyebab"]').classList.add('d-none');
    document.querySelector('div[data-content="kolestrol"]').classList.add('d-none');
    document.querySelector('div[data-content="tanda-gejala"]').classList.add('d-none');
    document.getElementById('on-this-page').classList.add('d-none');
    document.getElementById('kolestrol').classList.remove('active');
});
document.getElementById('pencegahan').addEventListener('click', function () {
    document.querySelector('div[data-content="pengobatan"]').classList.add('d-none');
    document.querySelector('div[data-content="pencegahan"]').classList.remove('d-none');
    document.querySelector('div[data-content="penyebab"]').classList.add('d-none');
    document.querySelector('div[data-content="kolestrol"]').classList.add('d-none');
    document.querySelector('div[data-content="tanda-gejala"]').classList.add('d-none');
    document.getElementById('on-this-page').classList.add('d-none');
    document.getElementById('kolestrol').classList.remove('active');
});
document.getElementById('penyebab').addEventListener('click', function () {
    document.querySelector('div[data-content="pengobatan"]').classList.add('d-none');
    document.querySelector('div[data-content="pencegahan"]').classList.add('d-none');
    document.querySelector('div[data-content="penyebab"]').classList.remove('d-none');
    document.querySelector('div[data-content="kolestrol"]').classList.add('d-none');
    document.querySelector('div[data-content="tanda-gejala"]').classList.add('d-none');
    document.getElementById('on-this-page').classList.add('d-none');
    document.getElementById('kolestrol').classList.remove('active');
});
document.getElementById('tanda-gejala').addEventListener('click', function () {
    document.querySelector('div[data-content="pengobatan"]').classList.add('d-none');
    document.querySelector('div[data-content="pencegahan"]').classList.add('d-none');
    document.querySelector('div[data-content="penyebab"]').classList.add('d-none');
    document.querySelector('div[data-content="kolestrol"]').classList.add('d-none');
    document.querySelector('div[data-content="tanda-gejala"]').classList.remove('d-none');
    document.getElementById('on-this-page').classList.add('d-none');
    document.getElementById('kolestrol').classList.remove('active');

});
document.getElementById('kolestrol').addEventListener('click', function () {
    document.querySelector('div[data-content="pengobatan"]').classList.add('d-none');
    document.querySelector('div[data-content="pencegahan"]').classList.add('d-none');
    document.querySelector('div[data-content="penyebab"]').classList.add('d-none');
    document.querySelector('div[data-content="kolestrol"]').classList.remove('d-none');
    document.querySelector('div[data-content="tanda-gejala"]').classList.add('d-none');
    document.getElementById('on-this-page').classList.remove('d-none');
    document.getElementById('kolestrol').classList.remove('active');
});