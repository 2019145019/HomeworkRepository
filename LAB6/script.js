let product = new Array();
let start = 0;
let end = 8;
let app = document.querySelector('#showbox');
let maj = document.querySelector('#major');
let sea = document.querySelector('#search');
let but = document.querySelector('button');
let cat = 'ALL';
let find = '';
let final_showlist = [];
document.addEventListener('DOMContentLoaded', load);
window.onscroll = () => {
    // infinite scroll
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
        addload();
    }
}

// use fetch to load product.json
function load(){
    fetch("https://2019145019.github.io/HomeworkRepository/LAB5/product.json")
    fetch("product.json")
    .then(response => response.json())
    .then(function(json){
        product = json;
        initial();
    }) 
}

but.onclick = click;
// 클릭시
function click(e){
    e.preventDefault();
    cat = maj.value;
    find = sea.value;
    // 삭제 먼저
    while(app.firstChild){
        app.removeChild(app.firstChild);
    }

    let showlist = [];
    // category first
    if(cat === 'ALL'){
        showlist = product;
    }
    else{
        for(let i = 0; i < product.length; i++){
            if(product[i].cat === cat){
                showlist.push(product[i]);
            }
        }
    }

    final_showlist = [];
    // search second
    if(find === ''){
        final_showlist = showlist;
    }
    else{
        for(let i = 0; i < showlist.length; i++){
            let tmp = showlist[i].name.toLowerCase();
            if(tmp.indexOf(find.toLowerCase()) != -1){
                final_showlist.push(showlist[i]);
            }
        }
    }
    start = 0;
    end = 8;
    display(final_showlist);
}

// 보여주기.
function initial(){
    // 삭제 먼저
    while(app.firstChild){
        app.removeChild(app.firstChild);
    }

    final_showlist = [];
    // category first
    if(cat === 'ALL'){
        final_showlist = product;
    }
    else{
        for(let i = 0; i < product.length; i++){
            if(product[i].cat === cat){
                final_showlist.push(product[i]);
            }
        }
    }
    start = 0;
    end = 8;
    display(final_showlist);
}

function display(final_showlist){
    for(let i = start; i < end; i++){
        const ele = document.createElement('div');

        // cost
        const elecost = document.createElement('div');
        elecost.setAttribute('id', 'cost');
        const elec = document.createElement('p');
        elec.innerHTML = final_showlist[i].cost;
        elecost.appendChild(elec);
        ele.appendChild(elecost);
        // text
        const eletext = document.createElement('div');
        eletext.setAttribute('id', 'name');
        const elep = document.createElement('p');
        elep.innerHTML = final_showlist[i].name;
        eletext.appendChild(elep);
        ele.appendChild(eletext);
        

        // img
        const eleimg = document.createElement('img')
        eleimg.setAttribute("src", "img/" + final_showlist[i].img);
        ele.appendChild(eleimg);

        
        ele.addEventListener("click", show);
        app.appendChild(ele);
    }
    
}

// add load
function addload(){
    start = end;
    end += 2;
    display(final_showlist);
}

// show
function show(){
    let getdiv = this.querySelectorAll('div');
    for(let i = 0; i < 2; i++){
        if(getdiv[i].style.display === 'inline'){
            getdiv[i].style.display = 'none';
        }
        else{
            getdiv[i].style.display = 'inline';
        }
    }
}
