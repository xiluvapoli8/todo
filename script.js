const tasks =[];

let divEmpty = document.getElementsByClassName('empty');
let divNotEmpty = document.getElementsByClassName('not_empty');

function chooseDisplay(){
    if (tasks.length===0){
        divEmpty.style.display = 'none';
        divNotEmpty.style.display = 'block';
    };
    else{
        divEmpty.style.display = 'block';
        divNotEmpty.style.display = 'none';
    }
}

function adder(){
    let inputText = document.getElementById('add_item').value;
    if (inputText != ""){
        tasks.push(inputText);
        
    }
    else{
        alert("Item cannot be empty!");
    }
    
}
