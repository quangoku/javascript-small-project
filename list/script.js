let list = [
  {
    id: 1,
    type: "snow armor",
    title: "cold",
    img: "1.png",
    text: "Look cool, stay frosty, and channel your inner snowman—just avoid fireplaces! ❄️😂",
  },
  {
    id: 2,
    type: "slime armor",
    title: "stink",
    img: "2.png",
    text: "Bouncy, squishy, and grossly fashionable! Perfect for soaking up hits—and maybe a little slime too. 🟢😂",
  },
  {
    id: 3,
    type: "emerald armor",
    title: "villager love this",
    img: "3.png",
    text: "Shine bright, flex harder, and let everyone know you're rich and green with envy! 💚💎",
  },
  {
    id: 4,
    type: "lapis armor",
    title: "what!!?",
    img: "4.png",
    text: "Drip in style, channel your inner mystic, and stay blue-tifully enchanted! 🔵✨",
  },
  {
    id: 5,
    type: "pumpkin armor",
    title: "halloween custom",
    img: "5.png",
    text: "Smashingly spooky, delightfully seedy, and perfect for squashing your enemies in style! 🎃💥",
  },
  {
    id: 6,
    type: "feather armor",
    title: "not too heavy",
    img: "6.png",
    text: "Float like a bird, fall like a leaf, and look fly while doing it! 🪶✨",
  },
];
const pfp = document.getElementById("pfp");
const type = document.getElementById("name");
const title = document.getElementById("title");
const description = document.getElementById("description");


let index = 0;

document.addEventListener("DOMContentLoaded", show());

function right() {
  index++;
  if (index > list.length - 1) {
    index = 0;
  }
  show();
}
function left() {
    index--;
    if (index <= 0) {
        index = list.length-1;
    }
    show();
  }

function show() {
  const item = list[index]; // get the item in the list

  //set value to html
  pfp.src = item.img;
  type.textContent = list[index].type;
  title.textContent = list[index].title;
  description.textContent = list[index].text;
  console.log(index);
}
