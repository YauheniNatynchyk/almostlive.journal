var pics;


pics = ['https://i.imgur.com/sAIsS32.jpeg', 
    'https://i.imgur.com/JYt01aR.jpeg',
    'https://i.imgur.com/x5PyelT.jpeg',
    'https://i.imgur.com/OAUoRU7.jpeg',
    'https://i.imgur.com/wWwXQ8H.jpeg',
    'https://i.imgur.com/mKB9GKJ.jpeg',
    'https://i.imgur.com/dXt694V.jpeg',
    'https://i.imgur.com/3n2AXop.jpeg'];

let element_pic = document.getElementById('pic');
element_pic.setAttribute("src", 'https://i.imgur.com/QkUK7JO.jpeg');


document.getElementById('next').addEventListener('click', (event) => {
  let element_pic2 = document.getElementById('pic');
  pics.push(pics[0]);
  element_pic2.setAttribute("src", pics.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_pic3 = document.getElementById('pic');
  pics.unshift(pics.slice(-1)[0]);
  element_pic3.setAttribute("src", pics.pop());

});