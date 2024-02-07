// JavaScript source code

document.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const progress = document.getElementById('progress');
    progress.style.width = scrollPercent + '%';
});
