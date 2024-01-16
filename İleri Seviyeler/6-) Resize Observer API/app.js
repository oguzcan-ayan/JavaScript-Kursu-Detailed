/* const textareas = document.querySelectorAll('textarea');

const resizeObserver = new ResizeObserver(entries => {
    // console.log(entries);
    for (const entry of entries) {
        // console.log(entry);
        // console.log('Height:',entry.contentRect.height);
        const size = entry.contentRect.height / 3 - 1;
        // console.log(size);
        entry.target.style.fontSize = size + 'px';
        entry.target.style.lineHeight = size + 'px';
    }

});

// resizeObserver.observe(textarea[0]);
// resizeObserver.observe(textarea[1]);

textareas.forEach(textarea => resizeObserver.observe(textarea)); */


/* const resizeObserver = new ResizeObserver(([entry]) => {
    const boxWidth = entry.target.querySelector('.box').offsetWidth;
    // console.log(boxWidth);
    // console.log(Math.floor(entry.contentRect.width / 200));
    const visibles = Math.floor(entry.contentRect.width / 200);
    entry.target.querySelectorAll('.box').forEach((box, index) => {
        if((index + 1) <= visibles){
            box.style.display = 'flex';
        }
        else{
            box.style.display = 'none';
        }
    });
}); */

// resizeObserver.observe(document.querySelector('.boxes'));

// document.querySelectorAll('.boxes').forEach(boxes => resizeObserver.observe(boxes));

const resizeObserver = new ResizeObserver(entries => {

    for(let entry of entries){
        const visibles = Math.floor(entry.contentRect.width / 200);
        entry.target.querySelectorAll('.box').forEach((box, index) => {
            if((index + 1) <= visibles){
                box.style.display = 'flex';
            }
            else{
                box.style.display = 'none';
            }
        });   
    }
});

document.querySelectorAll('.boxes').forEach(boxes => resizeObserver.observe(boxes));



const genres = [
    {
        title: 'Family'
    },
    {
        title: 'Fantastic'
    },
    {
        title: 'Comedy'
    },
    {
        title: 'Horror'
    },
    {
        title: 'Action'
    },
    {
        title: 'Adventure'
    },
    {
        title: 'Biography'
    },
    {
        title: 'Tension'
    },
    {
        title: 'Documentary'
    },
]


const observer = new ResizeObserver(([entry]) => {
    const visibles = Math.floor(entry.contentRect.width / 130);
    let html = '';
    if(visibles){
        html += genres.slice(0, visibles - 1).reduce((prev, current) => {  
            return prev += `<a href="#">${current.title}</a>`
        
        }, '')
    }
    const invisibles = genres.slice(visibles > 0 ? visibles - 1 : 0);
        if(invisibles.length > 0){
            html += `<div class="dropdown">`
            html += `<button>Genres</button>`
            html += `<nav>`
            html += invisibles.reduce((prev, current) => {  
                return prev += `<a href="#">${current.title}</a>`
            
            }, '')
            html += `</nav>`
            html += `</div>`
        }
    document.querySelector('.menu').innerHTML = html;    
})

observer.observe(document.querySelector('.menu'));