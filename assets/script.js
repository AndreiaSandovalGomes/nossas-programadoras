var dropMenu = document.getElementById("drop-menu");
dropMenu.addEventListener("change", carregaPrograms);

function carregaPrograms(){
  var option = dropMenu.value;
  var exibePrograms = document.getElementById("exibePrograms");
  exibePrograms.innerHTML = "";
  for(batata in data[option]){
    for(xuxu in data[option][batata]["students"]){
      (data[option][batata]["students"][xuxu]["photo"]);
      img = document.createElement("img");
      img.src = data[option][batata]["students"][xuxu]["photo"];
      exibePrograms.appendChild(img);
    }
  }
};
