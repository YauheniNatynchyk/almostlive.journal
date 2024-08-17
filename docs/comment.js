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
    new_span.setAttribute("id", 'username');
    new_span.innerText = document.getElementById('username').value;

    element_comment_section.appendChild(new_span);
    let new_li = document.createElement('li');
    new_li.setAttribute("class", 'comment');
    new_li.innerText = document.getElementById('commentinp').value;

    element_comment_section.appendChild(new_li);
  }

});