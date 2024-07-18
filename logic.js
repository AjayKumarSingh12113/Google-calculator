function countShow(value){
    document.getElementById("ram").value +=value;

}


function clearAll(){
    document.getElementById("ram").value='';
}

function calcAll(){
    const results= eval(document.getElementById("ram").value);

    document.getElementById("ram").value=results;
}