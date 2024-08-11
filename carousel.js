var pics;


pics = ['https://i.ibb.co/VJ3xjhS/1-46.jpg', 'https://i.ibb.co/w0Jzqcr/1-184.jpg', 'https://i.ibb.co/SyG9DN7/1-303.jpg', 'https://i.ibb.co/ckcpTQJ/1-322.jpg', 'https://i.ibb.co/QKG7xsM/1-355.jpg', 'https://i.ibb.co/W51dqv2/1-353.jpg', 'https://i.ibb.co/F7VFRzv/DSC00605.jpg', 'https://i.ibb.co/zXYTPQV/DSC00667.jpg'];

let element_pic = document.getElementById('pic');
element_pic.setAttribute("src", 'https://i.ibb.co/fdYgj7q/DSChttps://i.ibb.co/fdYgj7q/DSC00511.jpg00511.jpg');


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