const btn = document.querySelector('a');
btn.addEventListener('click', function (e) {
    
    let x = e.clientX - btn.offsetLeft;
    let y = e.clientY - btn.offsetTop;
    let effect = document.createElement('span');
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    
    btn.appendChild(effect);
    setTimeout(() => {
        effect.remove()
    },1000);
});
