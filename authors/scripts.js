let authors = [
	{
		firstName: "Andreas",
		lastName: "Neeser",
	},
	{
		firstName: "Anna",
		lastName: "Ruchat",
	},
	{
		firstName: "Arno",
		lastName: "Camenisch",
	},
	{
		firstName: "Barbara",
		lastName: "Schibli",
	},
	{
		firstName: "Demian",
		lastName: "Leinhard",
	},
	{
		firstName: "Flurina",
		lastName: "Bader",
	},
	{
		firstName: "Franco",
		lastName: "Supino",
	},
	{
		firstName: "Lukas",
		lastName: "Hartmann",
	},
	{
		firstName: "Marius",
		lastName: "Popescu",
	},
	{
		firstName: "Reto",
		lastName: "Haenny",
	},
	{
		firstName: "Sandra",
		lastName: "Kuenzi",
	},
	{
		firstName: "Simon",
		lastName: "Libsig",
	},
];

const gridContainer = document.getElementById("author-grid");

authors.forEach((author) => {
	let newLi = document.createElement("li");

	let newImg = document.createElement("img");
	newImg.src = `/img/tile_${author.firstName.toLowerCase()}_${author.lastName.toLowerCase()}.jpg`;
	newImg.alt = `portrait of ${author.firstName} ${author.lastName}`;

	let newA = document.createElement("a");

	let newH2 = document.createElement("h2");
	newH2.innerText = `${author.firstName} ${author.lastName}`;

	newA.appendChild(newH2);
	newLi.appendChild(newImg);
	newLi.appendChild(newA);

	gridContainer.appendChild(newLi);
});
