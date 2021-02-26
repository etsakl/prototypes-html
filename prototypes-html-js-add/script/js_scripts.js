
// TODO: need to clean box after enter event
// A snipset for a list on the go by the user
// to
const toList = document.querySelector('#toList');
const toItem = document.querySelector('#to');
toItem.addEventListener(
  "keyup",(e) => {
      if(e.code==="Enter"){
      newItem = toItem.value
      addItem(newItem,toList);
    }
  }
);
// cc
const ccList = document.querySelector('#ccList');
const ccItem = document.querySelector('#cc');
ccItem.addEventListener(
  "keyup",(e) => {
      if(e.code==="Enter"){
      newItem = ccItem.value
      addItem(newItem,ccList);
    }
  }
);
// TODO: relative not working
// relative
const  relativeList = document.querySelector('#relativeList');
const relativeItem = document.querySelector('#relative');
ccItem.addEventListener(
  "keyup",(e) => {
      if(e.code==="Enter"){
      newItem = relativeItem.value
      addItem(newItem,relativeList);
    }
  }
);





// the function adds new item to a List
var newItem = "";
function addItem(newItem,aList) {
  if(newItem.length>0){
    let item = document.createElement('li');
item.style.width = "100%"
item.style.maxWidth="20em"
item.style.padding="0.5em"
item.style.fontSize= "1em"
    item.textContent = newItem;
    let itemButton = document.createElement('button');
    itemButton.textContent=("delete");
    itemButton.addEventListener("click",deleteItem);
    item.appendChild(itemButton);
    aList.appendChild(item);
    addedItem.value=""
  }


}

function deleteItem(){
  this.parentNode.remove();

}



//var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}
