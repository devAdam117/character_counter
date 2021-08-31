const totalCharBox = document.getElementById("numberField");
const totalLettBox = document.getElementById("letterField");
const totalSpaceBox = document.getElementById("spaceField");
const totalLineBox = document.getElementById("lineField");
const textBox = document.getElementById("textBox");
const totalWordsBox = document.getElementById("wordsField");
//nums
let spaceNum = 0;
let charNum =0;
let wordsNum = 0;
let linesNum = 0;
let lettNum = 0;
//arrs
let lineArr= [];
let spaceArr= [];

const tableGet = ()=> {
  const table = document.getElementById("table");
  let rows= document.querySelectorAll("tr")
  let nameColumns = rows[0].querySelectorAll("th");
  let numberColumns = rows[1].querySelectorAll("td");
  return [nameColumns,numberColumns];
}
//Counting number of spec. char upper/lowe case in string from textbox
const tableCharCounter = (string,char2Search,secondChar)=> {
  try {
  num=string.match(new RegExp(char2Search, "g") || []).length;
  }
  catch {
  num=0;
  }
  try {
    num2=string.match(new RegExp(secondChar, "g") || []).length;
  }
  catch {
  num2=0;
  }
      return num+num2;
  }

const checkChar = () => {  
  lineArr=[];
  spaceArr=[];   
  let chars=textBox.value.split("");  
  let words=textBox.value.split(/\s+/);   
  words[0] == ""? words.splice(0,1):0;    
  chars.forEach((element,i) => {
    chars[i]=="\n"? (lineArr.push(chars[i])):0;
  });

  chars.forEach((element,i) => {
    chars[i]==" "? (spaceArr.push(chars[i])):0;
  });

  arrToCompute=charCounter(lineArr,spaceArr,chars,words)
  changeText(arrToCompute[0],arrToCompute[1],arrToCompute[2],arrToCompute[3],arrToCompute[4]) 
  chars4Table = createObjects(textBox.value);  
  generateTable(chars4Table);

}
//create sorted array object of most common chars in string by values of appereance
const createObjects=(string)=>{
  charsArr= [
  {
    name:"A/a",
    num:tableCharCounter(string,"a","A")
  },
  {
    name:"B/b",
    num:tableCharCounter(string,"b","B")
  },
  {
    name:"C/c",
    num:tableCharCounter(string,"c","C")
  },
  {
    name:"D/d",
    num:tableCharCounter(string,"D","d")
  },
  {
    name:"E/e",
    num:tableCharCounter(string,"E","e")
  },
  {
    name:"F/f",
    num:tableCharCounter(string,"F","f")
  },
  {
    name:"G/g",
    num:tableCharCounter(string,"G","g")
  },
  {
    name:"H/h",
    num:tableCharCounter(string,"H","h")
  },
  {
    name:"I/i",
    num:tableCharCounter(string,"I","i")
  },
  {
    name:"J/j",
    num:tableCharCounter(string,"J","j")
  },
  {
    name:"K/k",
    num:tableCharCounter(string,"K","k")
  },
  {
    name:"L/l",
    num:tableCharCounter(string,"L","l")
  },
  {
    name:"M/m",
    num:tableCharCounter(string,"M","m")
  },
  {
    name:"N/n",
    num:tableCharCounter(string,"N","n")
  },
  {
    name:"O/o",
    num:tableCharCounter(string,"O","o")
  },
  {
    name:"P/p",
    num:tableCharCounter(string,"P","p")
  },
  {
    name:"Q/q",
    num:tableCharCounter(string,"Q","q")
  },
  {
    name:"R/r",
    num:tableCharCounter(string,"R","r")
  },
  {
    name:"S/s",
    num:tableCharCounter(string,"S","s")
  },
  {
    name:"T/t",
    num:tableCharCounter(string,"T","t")
  },
  {
    name:"U/u",
    num:tableCharCounter(string,"U","u")
  },
  {
    name:"V/v",
    num:tableCharCounter(string,"V","v")
  },
  {
    name:"W/w",
    num:tableCharCounter(string,"W","w")
  },
  {
    name:"X/x",
    num:tableCharCounter(string,"X","x")
  },
  {
    name:"Y/y",
    num:tableCharCounter(string,"Y","y")
  },
  {
    name:"Z/z",
    num:tableCharCounter(string,"Z","z")
  }];  
  
  return sortObjects(charsArr)
}
const sortObjects =(arrObj)=> {
  arrObj.sort((a,b)=> parseFloat(b.num)-parseFloat(a.num))
  return arrObj;
}
const charCounter = (enterArr,spaceArr,totalArr,wordsArr)=> {
  charNum=totalArr.length-enterArr.length;
  linesNum=enterArr.length;
  spaceNum= spaceArr.length;
  lettNum= charNum-spaceNum; 
  wordsNum= wordsArr.length 
  return [charNum,lettNum,spaceNum,linesNum,wordsNum];
}

const changeText = (ar1,ar2,ar3,ar4,ar5) => {
  totalCharBox.innerHTML=ar1;
  totalLettBox.innerHTML=ar2
  totalSpaceBox.innerHTML=ar3;
  totalLineBox.innerHTML=ar4;
  totalWordsBox.innerHTML=ar5;
  (ar1==0 && ar4==0) ?  (totalWordsBox.classList.add("number"),totalWordsBox.innerHTML=1,totalCharBox.innerHTML=6, totalCharBox.classList.add("number"), totalLettBox.innerHTML=6,totalLettBox.classList.add("number"),totalSpaceBox.innerHTML=0,totalSpaceBox.classList.add("number"),totalLineBox.innerHTML=0,totalLineBox.classList.add("number")):(totalWordsBox.classList.remove("number"),totalCharBox.classList.remove("number"),totalLineBox.classList.remove("number"),totalSpaceBox.classList.remove("number"),totalLettBox.classList.remove("number"));
}

const generateTable = (objArr) => {
  stringLength=textBox.value.length
  tableGet()[0][0].innerHTML=objArr[0].name;
  tableGet()[1][0].innerHTML=Math.round((100*objArr[0].num)/stringLength)+" %";   

  tableGet()[0][1].innerHTML=objArr[1].name;
  tableGet()[1][1].innerHTML=Math.round((100*objArr[1].num)/stringLength)+" %"; 

  tableGet()[0][2].innerHTML=objArr[2].name;
  tableGet()[1][2].innerHTML=Math.round((100*objArr[2].num)/stringLength)+" %";

  tableGet()[0][3].innerHTML=objArr[3].name;
  tableGet()[1][3].innerHTML=Math.round((100*objArr[3].num)/stringLength)+" %"; 

   for(let i=0; i<4;i++){
     if(i==0){
      tableGet()[1][i].innerHTML=="NaN %" ? tableGet()[1][i].innerHTML=50+" %":0
     }
     else {
      tableGet()[1][i].innerHTML=="NaN %" ? tableGet()[1][i].innerHTML=17+" %":0
     }
  }}





