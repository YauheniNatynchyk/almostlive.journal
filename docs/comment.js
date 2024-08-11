function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}



document.getElementById('addcomm').addEventListener('click', (event) => {
  let element_comment_section = document.getElementById('comment_section');
  if (!(document.getElementById('username').value == '')) {
    let new_span = document.createElement('span');
    new_span.innerText = document.getElementById('username').value;
    new_span.classList.toggle('header');

    element_comment_section.appendChild(new_span);
    let new_li = document.createElement('li');
    new_li.setAttribute("class", 'comment');
    new_li.innerText = document.getElementById('commentinp').value;

    element_comment_section.appendChild(new_li);
  }

});

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