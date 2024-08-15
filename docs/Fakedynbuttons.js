let element_OCCT2 = document.getElementById('OCCT2');
element_OCCT2.style.visibility = (false) ? 'visible' : 'hidden';


document.getElementById('OCCT2').addEventListener('click', (event) => {
  let element_occtlink = document.getElementById('occtlink');
  element_occtlink.replaceChildren();
  let new_a = document.createElement('a');
  new_a.setAttribute("href", 'https://www.ocbase.com/');
  new_a.innerText = 'OCCT - hardware stress testing tool.';

  element_occtlink.appendChild(new_a);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_OCCT = document.getElementById('OCCT');
  element_OCCT.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('OCCT').addEventListener('click', (event) => {
  let element_occtlink2 = document.getElementById('occtlink');
  let new_ul = document.createElement('ul');
  let new_li = document.createElement('li');
  let new_span = document.createElement('span');
  new_span.innerText = 'OCCT is a free, comprehensive software tool designed for PC enthusiasts, overclockers, and system builders. It serves multiple purposes:  Stability testing: Stress tests CPU, GPU, and memory to ensure system stability under heavy loads. Stress testing: Pushes hardware components to their limits to identify potential issues or weaknesses. Benchmarking: Measures and compares system performance across different hardware configurations. Monitoring: Tracks and displays real-time information on temperatures, voltages, clock speeds, and other system parameters. Error detection: Helps identify hardware issues, particularly those related to overclocking or system instability.  Key features of OCCT include:  Multiple test types (Linpack, Small/Medium/Large FFTs, etc.) GPU stress testing and error checking Power supply unit (PSU) testing Customizable test durations and settings Detailed hardware monitoring and logging User-friendly interface with graphical displays of system information  OCCT is particularly popular among overclockers and system builders for verifying system stability and identifying potential hardware issues. ';
  let new_img = document.createElement('img');
  new_img.setAttribute("src", 'https://i.ytimg.com/vi/JmRdFmpXoeU/maxresdefault.jpg');

  new_span.appendChild(new_img);

  new_li.appendChild(new_span);

  new_ul.appendChild(new_li);

  element_occtlink2.appendChild(new_ul);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_OCCT22 = document.getElementById('OCCT2');
  element_OCCT22.style.visibility = (true) ? 'visible' : 'hidden';

});