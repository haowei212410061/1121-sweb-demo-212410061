function showdemo(week){
    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch(week){
        case 2:
            p.innerHTML = `<iframe src="./w02_61/index.html" width="100%" height="100%" />`
            break;
        case 3:
            p.innerHTML = `<iframe src="./w03_61_card/index.html" width="100%" height="100%" />`
            break;
        case 4:
            p.innerHTML = `<iframe src="./w04_61_blog/index.html" width="100%" height="100%" />`
            break;
        case 5:
            p.innerHTML = `<iframe src="./w05_61/index.html" width="100%" height="100%" />`
            break;
        case 6:
            p.innerHTML = `<iframe src="./w06_61/index.html" width="100%" height="100%" />`
            break;
        case 7:
            p.innerHTML = `<iframe src="./w07_61_title/index.html" width="100%" height="100%">`
            break;
                
    }
}