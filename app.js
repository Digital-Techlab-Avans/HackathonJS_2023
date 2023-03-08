
let shapes1 = ['plane','ghost','poo','hippo'] 
let shapes2 = ['headphones','umbrella','car','flask'] 
let symbols = shapes1.concat(shapes2);

let belt = document.querySelector('conveyer-belt');
let correct = 0;
let wrong = 0;

let correctEl = document.getElementById('correct');
let wrongEl = document.getElementById('wrong');

belt.boxReachedEnd = function(box)
{
  if(box.nrOfCompleted == box.nrOfSymbols)
  {
    correct++;
    correctEl.innerHTML = correct;
  }
  else {
    wrong++;
    wrongEl.innerHTML = wrong;
  }

  box.remove();
}

window.setInterval(() => {
  let nrOfSymbols = getRandomInt(2, 5);
  let selectedSymbols = "";
  let allSymbols = [...symbols]
  for (let i = 0; i < nrOfSymbols; i++) {
      let randomIndex = getRandomInt(0, allSymbols.length)
      console.log(allSymbols);
      console.log(randomIndex);
      let current = allSymbols[randomIndex];
      allSymbols.splice(randomIndex, 1);
      selectedSymbols += current + ",";
  }

  selectedSymbols = selectedSymbols.substring(0,selectedSymbols.length-1);

  belt.addBox(selectedSymbols);
}, 3000);


window.setInterval(() => {
    randomBucketFill();
}, 1000);



function getRandomInt(min, max) {
    return min + (Math.floor(Math.random() * (max - min)));
}


function randomBucketFill() {

   
    let chosenShape1 = getRandomInt(0, shapes1.length);
    let chosenShape2 = getRandomInt(0, shapes2.length);

    let bucketIcon1 = document.getElementById('bucketicon1');
    let bucketIcon2 = document.getElementById('bucketicon2');

   
    bucketIcon1.classList = "";
    bucketIcon1.classList.add('fa-solid');
    bucketIcon1.classList.add('fa-'+shapes1[chosenShape1]);
    bucketIcon1.parentElement.dataset.contents = shapes1[chosenShape1];

    bucketIcon2.classList = "";
    bucketIcon2.classList.add('fa-solid');
    bucketIcon2.classList.add('fa-'+shapes2[chosenShape2]);
    bucketIcon2.parentElement.dataset.contents = shapes2[chosenShape2];


}

window.addEventListener("DOMContentLoaded", () => {
const element1 = document.getElementById("bucket1");
const element2 = document.getElementById("bucket2");
// Add the ondragstart event listener
element1.addEventListener("dragstart", dragstart_handler);
element2.addEventListener("dragstart", dragstart_handler);

});

function dragstart_handler(ev) {
    console.log(ev.target.dataset.contents);
    //ev.dataTransfer.dropEffect = "copy";
    // Add different types of drag data
    ev.dataTransfer.setData("text/plain", ev.target.dataset.contents);
   // ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    // ev.dataTransfer.setData(
    //   "text/uri-list",
    //   ev.target.ownerDocument.location.href
    // );
}