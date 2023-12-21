// Your code here.

const item = document.getElementsByClassName("item");
const items = document.getElementsByClassName("items");

for (let i = 0; i < items.length; i++) {
	item[i].addEventListener("dragstart", (event) => {
		event.dataTransfer.setData("id", item[i].id);
	});

	item[i].addEventListener("dragover", (event) => {
  event.preventDefault();
});
}



items.addEventListener("drop", (event) => {
  const droppedElementId = event.dataTransfer.getData("id");
  const element = document.getElementById(droppedElementId); //
  element.draggable = false;
  items.appendChild(element);
});