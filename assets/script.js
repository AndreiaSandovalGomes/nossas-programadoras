var dropMenu = document.getElementById("drop-menu");
dropMenu.addEventListener("change", carregaProgramadoras);

window.onload = carregaMenu();

function carregaMenu(){
  var dropMenu = document.getElementById("drop-menu");
  dropMenu.innerHTML = "";
  var none = document.createElement("option");
  none.value = "none";
  none.innerHTML = "selecione";
  dropMenu.appendChild(none);
  for(sede in data){
    var itemMenu = document.createElement("option");
    itemMenu.value = sede;
    itemMenu.innerHTML = sede;
    dropMenu.appendChild(itemMenu);
  }
};

function carregaProgramadoras(){
  var sede = dropMenu.value;
  var exibeProgramadoras = document.getElementById("exibe-programadoras");
  exibeProgramadoras.innerHTML = "";
  for(turma in data[sede]){
    for(i in data[sede][turma]["students"]){
      (data[sede][turma]["students"][i]["photo"]);
      var img = document.createElement("img");
      img.src = data[sede][turma]["students"][i]["photo"];
      exibeProgramadoras.appendChild(img);
    }
  }
};
