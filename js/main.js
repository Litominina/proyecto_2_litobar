let maria = 2
let jesus = 4
console.log(maria*jesus)


const menuItems = document.querySelectorAll('.menuitem');

menuItems.forEach(function(item){
    item.addEventListener('click',function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');


});
});

const botonModoOscuro = document.querySelector('#modooscuro');
botonModoOscuro.addEventListener('click', function() {
    document.body.classList.toggle('modooscuro')
})
