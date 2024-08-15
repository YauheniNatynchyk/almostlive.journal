let element_OCCT2 = document.getElementById('OCCT2');
element_OCCT2.style.visibility = (false) ? 'visible' : 'hidden';
let element_MSIB2 = document.getElementById('MSIB2');
element_MSIB2.style.visibility = (false) ? 'visible' : 'hidden';


document.getElementById('OCCT').addEventListener('click', (event) => {
  let element_occtlink = document.getElementById('occtlink');
  let new_ul = document.createElement('ul');
  let new_li = document.createElement('li');
  let new_span = document.createElement('span');
  new_span.innerText = 'OCCT is a free, comprehensive software tool designed for PC enthusiasts, overclockers, and system builders. It serves multiple purposes:  Stability testing: Stress tests CPU, GPU, and memory to ensure system stability under heavy loads. Stress testing: Pushes hardware components to their limits to identify potential issues or weaknesses. Benchmarking: Measures and compares system performance across different hardware configurations. Monitoring: Tracks and displays real-time information on temperatures, voltages, clock speeds, and other system parameters. Error detection: Helps identify hardware issues, particularly those related to overclocking or system instability.  Key features of OCCT include:  Multiple test types (Linpack, Small/Medium/Large FFTs, etc.) GPU stress testing and error checking Power supply unit (PSU) testing Customizable test durations and settings Detailed hardware monitoring and logging User-friendly interface with graphical displays of system information  OCCT is particularly popular among overclockers and system builders for verifying system stability and identifying potential hardware issues. ';
  let new_img = document.createElement('img');
  new_img.setAttribute("src", 'https://i.ytimg.com/vi/JmRdFmpXoeU/maxresdefault.jpg');
  new_img.setAttribute("class", 'card-1');

  new_span.appendChild(new_img);

  new_li.appendChild(new_span);

  new_ul.appendChild(new_li);

  element_occtlink.appendChild(new_ul);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_OCCT22 = document.getElementById('OCCT2');
  element_OCCT22.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('OCCT2').addEventListener('click', (event) => {
  let element_occtlink2 = document.getElementById('occtlink');
  element_occtlink2.replaceChildren();
  let new_a = document.createElement('a');
  new_a.setAttribute("href", 'https://www.ocbase.com/');
  new_a.innerText = 'OCCT - hardware stress testing tool.';

  element_occtlink2.appendChild(new_a);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_OCCT = document.getElementById('OCCT');
  element_OCCT.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('MSIB').addEventListener('click', (event) => {
  let element_msi = document.getElementById('msi');
  let new_ul2 = document.createElement('ul');
  let new_li2 = document.createElement('li');
  let new_span2 = document.createElement('span');
  new_span2.innerText = 'MSI Afterburner is a popular, free utility designed primarily for overclocking graphics cards, but it has evolved into a comprehensive tool for PC enthusiasts and gamers. This software provides users with fine-grained control over their GPU\'s performance parameters, including core clock speed, memory clock speed, and voltage. It supports a wide range of graphics cards, not limited to MSI products, making it a versatile choice for many users. Beyond its overclocking capabilities, MSI Afterburner offers robust hardware monitoring features. It can track and display real-time information on GPU temperature, clock speeds, usage, and fan speeds. The software also extends its monitoring capabilities to other system components like CPU and RAM. One of Afterburner\'s standout features is its on-screen display (OSD) functionality, which allows users to view performance metrics directly in-game. This is particularly useful for gamers who want to monitor their system\'s performance without alt-tabbing out of their games. MSI Afterburner also includes a built-in benchmarking tool and the ability to create custom fan profiles for optimal cooling. Its user-friendly interface, coupled with its extensive feature set, has made it a go-to application for PC enthusiasts looking to squeeze extra performance out of their graphics cards or simply keep a close eye on their system\'s behavior.';
  let new_img2 = document.createElement('img');
  new_img2.setAttribute("src", 'https://www.custompc.com/wp-content/sites/custompc/2023/04/MSI-Afterburner-4-6-5-update.jpg');
  new_img2.setAttribute("class", 'card-1');

  new_span2.appendChild(new_img2);

  new_li2.appendChild(new_span2);

  new_ul2.appendChild(new_li2);

  element_msi.appendChild(new_ul2);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_MSIB22 = document.getElementById('MSIB2');
  element_MSIB22.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('MSIB2').addEventListener('click', (event) => {
  let element_msi2 = document.getElementById('msi');
  element_msi2.replaceChildren();
  let new_a2 = document.createElement('a');
  new_a2.setAttribute("href", 'https://www.msi.com/Landing/afterburner/graphics-cards');
  new_a2.innerText = 'Msi afterburner - videocard overclocking and control.';

  element_msi2.appendChild(new_a2);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_MSIB = document.getElementById('MSIB');
  element_MSIB.style.visibility = (true) ? 'visible' : 'hidden';

});