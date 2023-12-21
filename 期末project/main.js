function showClassDemo(classdemo) {
    var elements = document.getElementsByClassName('.classdemo');
    elements.classList.add('demo')
}

const black = document.getElementsByClassName('.fa-solid fa-toggle-on');
black.addEventListener('click',function() {
    if (this.checked) {
        document.body.classList.add('dark');
    }
    else{
        document.body.classList.remove('dark');
    }
});