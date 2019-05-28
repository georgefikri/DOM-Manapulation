(function (){

//create colors array of objects
let colorsObj =[
    {name: 'a' , color: '#ff8b15'},
    {name: 'b ', color: '#908483'},
    {name: 'c', color: '#4fff33'},
    {name: 'r' , color: '#ff8b15'},
    {name: 'h ', color: '#908483'},
    {name: 'k', color: '#4fff33'},
    {name: 'd', color: '#32668c'},
    {name: 'g', color: '#32768c'}
];


//draw colors div
let i;

let colArr = [...colorsObj];
let countCol = colArr.length;


for (i = 0 ; i < countCol; i++)
{
    colArr[i] = document.createElement('div');
}

//adding new div under the parent colorsCont
let colorsCont = document.getElementById('colorsCont');
let j

for(j =0 ; j < countCol; j++ ) {

    colorsCont.appendChild(colArr[j]);
}

//taking data from object and adding it to html dom elements
let k 
for(k = 0 ; k < countCol ; k++)
{
    colArr[k].innerHTML = colorsObj[k].name;
    colArr[k].style.width = "150px"
    colArr[k].style.height = "50px"
    colArr[k].style.backgroundColor = colorsObj[k].color;
    
}


//adding active to html dom element

var counter = 0;

let activeLoc =0;

if(counter == 0) {
    let parent = document.getElementById('colorsCont');
    parent.getElementsByTagName('div')[activeLoc].setAttribute('class' , 'active');  
}


//function of first click
function firstClick() {
    

    
    let parent1 = document.getElementById('colorsCont');
    parent1.getElementsByTagName('div')[activeLoc].removeAttribute("class");
   
   counter++;

    activeLoc = counter %countCol;
    let parent2 = document.getElementById('colorsCont');
    parent2.getElementsByTagName('div')[activeLoc].setAttribute('class' , 'active'); 

 

    //increase counter
    //update print counter;
    document.getElementById('result').innerHTML = counter;

}

//first click
document.getElementById('click').addEventListener('click' , firstClick);



//printing counter to result div
document.getElementById('result').innerHTML = counter;






})();