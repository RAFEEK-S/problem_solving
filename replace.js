// function replace(){
//     var values = 5;
//     if(values == 5){
//         values = "*";
//     }
//     console.log(values)
// }
// replace();

function changeValue() {
  var name = "sanjay";
  var results = "";

  for (let i = 0; i < name.length; i++) {
    if (name[i] === "j") {
     results = results + "k"
    }else{
    results = results + name[i];
    }
    
  }
  console.log(results);
}
changeValue();
