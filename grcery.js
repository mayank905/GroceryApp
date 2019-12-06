const SUBMIT ='button';
const CLICK ='click';
const NAME='name';
const UNIT='unit';
const PRICE ='price';
const T01='t01';
const TR='tr';
const TD='td';
const CURRENT='current';
const INPUT='input';
const BUTTON='button';
const EDIT='Edit';
const SAVE='Save';
const DELETE='Delete';
const TRUE='true';
const FALSE='false';
const tableData=[];
const table =document.getElementById(T01);

const TOTAL=document.getElementById('grandTotalText');


var count=0;
const insert =document.getElementById(SUBMIT);
var grandTotal=0;



//eventListener handles table creation dynamically

insert.addEventListener(CLICK, function append()
{
    count ++;
    const row =document.createElement(TR);
    tableData[0]=document.getElementById(NAME);
    tableData[1] =document.getElementById(UNIT);
    tableData[2] =document.getElementById(PRICE);

    row.classList.add(CURRENT+count);
    for(let i=0;i<tableData.length;i++)
    {
        let definition =document.createElement(TD);
        definition.textContent=tableData[i].value;
        definition.classList.add(CURRENT+count);
        row.appendChild(definition);
    }
    let val1=tableData[1].value;
    let val2=tableData[2].value;
    let definition1 =document.createElement(TD);
    //parseInt((tableData[1].value))*parseInt((tableData[2].value));
    definition1.textContent=multiply(tableData[1],tableData[2]);
    grandTotal +=parseInt(definition1.textContent);
    TOTAL.value=parseInt(grandTotal);
    if(definition1.value == 0){return false;}
    definition1.classList.add(CURRENT+count);
    row.appendChild(definition1);

    definition1=document.createElement(TD);
    var btn = document.createElement(INPUT);
    btn.type = BUTTON;
    btn.className = CURRENT+count;
    btn.value = EDIT;
    btn.onclick=function(){edit(btn.className)};
    definition1.appendChild(btn)
    row.appendChild(definition1);

    definition1=document.createElement(TD);
    var btn1 = document.createElement(INPUT);
    btn1.type = BUTTON;
    btn1.className = CURRENT+count;
    btn1.value = DELETE;
    btn1.onclick=function(){delete1(btn1.className)};
    definition1.appendChild(btn1)
    row.appendChild(definition1);

    definition1=document.createElement(TD);
    var btn1 = document.createElement(INPUT);
    btn1.type = BUTTON;
    btn1.className = CURRENT+count;
    btn1.value = SAVE;
    btn1.onclick=function(){save(btn1.className)};
    definition1.appendChild(btn1)
    row.appendChild(definition1);

    table.appendChild(row);
});


function delete1(value)
{
    let remove1=document.getElementsByClassName(value);
    grandTotal -= parseInt(remove1[4].textContent);
    TOTAL.value=parseInt(grandTotal);
    remove1[0].remove();
}
function edit(value)
{
    let edit1=document.getElementsByClassName(value);
    for(j=2;j<edit1.length-2;j++){
        edit1[j].contentEditable=TRUE;
    }
}

function save(value)
{
    let save1=document.getElementsByClassName(value);
    //let target =event.target.className;
    grandTotal -=parseInt(save1[4].textContent);
    let result=parseInt(save1[2].textContent)*parseInt(save1[3].textContent);
    save1[4].innerHTML=parseInt(result);
    grandTotal += parseInt(save1[4].textContent);
    TOTAL.value=parseInt(grandTotal);
    for(j=2;j<save1.length-2;j++){
        save1[j].contentEditable =FALSE;
    }
}


function multiply(val1,val2)
{
    let val3=val1.value*val2.value;
    return val3;
}