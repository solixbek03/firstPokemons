let elList =document.querySelector(".js-list")

pokemons.forEach(pokemon => {
  let newLi =document.createElement("li");
  newLi.classList.add("card", "m-3", "d-flex", "flex-column", "align-items-center");

  let newImg =document.createElement("Img");
  newImg.src =pokemon.img;
  newImg.alt =pokemon.name;
  newImg.classList.add("card-img-top", "list-li");
  newImg.width= 100;

  let newBox =document.createElement("div");
  newBox.classList.add("card-body", "list-box", "bg-info", "rounded-bottom");

  let elTitle = document.createElement("h4");
  elTitle.textContent = pokemon.name;
  elTitle.classList.add("card-title", "h6", "text-center");

  let elweaknessess = document.createElement("p");
  elweaknessess.textContent = pokemon.weaknesses.join(` + `);
  elweaknessess.classList.add("card-text", "flex-wrap", "text-center")


  console.log(pokemons.weaknesses)


  newBox.append(elTitle, elweaknessess);
  elList.appendChild(newLi);
  newLi.append(newImg, newBox);
})