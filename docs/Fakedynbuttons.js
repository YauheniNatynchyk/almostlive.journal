let element_OCCT2 = document.getElementById('OCCT2');
element_OCCT2.style.visibility = (false) ? 'visible' : 'hidden';
let element_MSIB2 = document.getElementById('MSIB2');
element_MSIB2.style.visibility = (false) ? 'visible' : 'hidden';
let element_FPS2 = document.getElementById('FPS2');
element_FPS2.style.visibility = (false) ? 'visible' : 'hidden';
let element_eye2 = document.getElementById('eye2');
element_eye2.style.visibility = (false) ? 'visible' : 'hidden';
let element_mic2 = document.getElementById('mic2');
element_mic2.style.visibility = (false) ? 'visible' : 'hidden';


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

document.getElementById('MSIB2').addEventListener('click', (event) => {
  let element_msi = document.getElementById('msi');
  element_msi.replaceChildren();
  let new_a2 = document.createElement('a');
  new_a2.setAttribute("href", 'https://www.msi.com/Landing/afterburner/graphics-cards');
  new_a2.innerText = 'Msi afterburner - videocard overclocking and control.';

  element_msi.appendChild(new_a2);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_MSIB = document.getElementById('MSIB');
  element_MSIB.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('MSIB').addEventListener('click', (event) => {
  let element_msi2 = document.getElementById('msi');
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

  element_msi2.appendChild(new_ul2);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_MSIB22 = document.getElementById('MSIB2');
  element_MSIB22.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('FPS1').addEventListener('click', (event) => {
  let element_fps = document.getElementById('fps');
  let new_ul3 = document.createElement('ul');
  let new_li3 = document.createElement('li');
  let new_span3 = document.createElement('span');
  new_span3.innerText = 'FPS Monitor is a comprehensive system monitoring tool designed primarily for gamers and PC enthusiasts. This software provides real-time tracking and display of various system performance metrics, with a particular focus on frame rates in games, hence the "FPS" in its name. The application offers an unobtrusive on-screen display (OSD) that can be customized to show a wide array of system information. This includes not only frames per second, but also CPU and GPU usage, temperatures, clock speeds, memory usage, and network statistics. Users can choose which metrics to display and customize the OSD\'s appearance and position on the screen. FPS Monitor supports a vast library of games and applications, allowing it to work seamlessly across different software without conflicts. It\'s designed to have minimal impact on system performance, ensuring that the monitoring itself doesn\'t significantly affect the metrics being measured. One of FPS Monitor\'s key features is its ability to log performance data over time. This allows users to analyze their system\'s behavior during extended gaming sessions or benchmark tests, helping to identify potential performance issues or bottlenecks. The software also includes a desktop widget for monitoring system performance outside of games, and it offers multi-language support for international users. While it\'s not free like some alternatives, FPS Monitor provides a comprehensive suite of monitoring tools in a single, user-friendly package.';
  let new_img3 = document.createElement('img');
  new_img3.setAttribute("src", 'https://i.ytimg.com/vi/v_y6KoQe3oQ/maxresdefault.jpg');
  new_img3.setAttribute("class", 'card-1');

  new_span3.appendChild(new_img3);

  new_li3.appendChild(new_span3);

  new_ul3.appendChild(new_li3);

  element_fps.appendChild(new_ul3);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_FPS22 = document.getElementById('FPS2');
  element_FPS22.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('FPS2').addEventListener('click', (event) => {
  let element_fps2 = document.getElementById('fps');
  element_fps2.replaceChildren();
  let new_a3 = document.createElement('a');
  new_a3.setAttribute("href", 'https://fpsmon.com/en/');
  new_a3.innerText = 'FPS monitor - best overlay monitoring';

  element_fps2.appendChild(new_a3);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_FPS1 = document.getElementById('FPS1');
  element_FPS1.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('eye1').addEventListener('click', (event) => {
    let element_eyel = document.getElementById('eyel');
    let new_ul3 = document.createElement('ul');
    let new_li3 = document.createElement('li');
    let new_span3 = document.createElement('span');
    new_span3.innerText = 'EyeCandy is a dynamic online platform designed for filmmakers, visual artists, and creatives to explore and showcase a vast collection of visual techniques. The website serves as both a learning resource and an inspiration hub, offering an extensive library of filmmaking techniques like "Bullet Time," "Dolly Zoom," and "Morphing," among many others. It’s a community-driven space where users can submit their work, interact with other creatives, and even download visual references like GIFs to use in their projects.';
    let new_img3 = document.createElement('img');
    new_img3.setAttribute("src", 'https://asset.eyecannndy.com/static/images/eyecandy-og.jpg');
    new_img3.setAttribute("class", 'card-1');
  
    new_span3.appendChild(new_img3);
  
    new_li3.appendChild(new_span3);
  
    new_ul3.appendChild(new_li3);
  
    element_eyel.appendChild(new_ul3);
    event.target.style.visibility = (false) ? 'visible' : 'hidden';
    let element_eye2 = document.getElementById('eye2');
    element_eye2.style.visibility = (true) ? 'visible' : 'hidden';
  
  });
  
  document.getElementById('eye2').addEventListener('click', (event) => {
    let element_eyel = document.getElementById('eyel');
    element_eye2.replaceChildren();
    let new_a3 = document.createElement('a');
    new_a3.setAttribute("href", 'https://eyecannndy.com/');
    new_a3.innerText = 'Eye cannndy - huge visual tecnics library';
  
    element_eye2.appendChild(new_a3);
    event.target.style.visibility = (false) ? 'visible' : 'hidden';
    let element_eye1 = document.getElementById('eye1');
    element_eye1.style.visibility = (true) ? 'visible' : 'hidden';
  
  });
  
  document.getElementById('mic1').addEventListener('click', (event) => {
    let element_mics = document.getElementById('mics');
    let new_ul3 = document.createElement('ul');
    let new_li3 = document.createElement('li');
    let new_span3 = document.createElement('span');
    new_span3.innerText = 'Every mic profile contains the mic’s specifications, links to all the best reviews and forum exchanges, a list of related microphones, a tag cloud describing the mic’s characteristics, and a long description that includes, as appropriate, the mic’s origin and history, construction and circuit details, common applications, insider information, and more. Modification and upgrade opportunities are provided, with a sidebar showing links to commercial modders who can help non-DIY types. And finally, for boutique mics, I interview the mic’s designer to get a fuller glimpse into the mic’s design intent and some of the technical magic embodied in the physical microphone. Microphone frequency-response graphs are presented in a common size and scale, facilitating comparisons. Click any such graph to see our new (November, 2010) graph-overlay tool, which will stack up two frequency graphs for direct visual comparison.';
    let new_img3 = document.createElement('img');
    new_img3.setAttribute("src", 'https://jonmattox.com/wp-content/uploads/2014/08/cover_50kribbon-1024x475.jpg');
    new_img3.setAttribute("class", 'card-1');
  
    new_span3.appendChild(new_img3);
  
    new_li3.appendChild(new_span3);
  
    new_ul3.appendChild(new_li3);
  
    element_mics.appendChild(new_ul3);
    event.target.style.visibility = (false) ? 'visible' : 'hidden';
    let element_mic2 = document.getElementById('mic2');
    element_mic2.style.visibility = (true) ? 'visible' : 'hidden';
  
  });
  
  document.getElementById('mic2').addEventListener('click', (event) => {
    let element_mic2 = document.getElementById('mics');
    element_mic2.replaceChildren();
    let new_a3 = document.createElement('a');
    new_a3.setAttribute("href", 'http://recordinghacks.com/microphones');
    new_a3.innerText = 'recordinghacks - the greatest resource about mics with a huge mic specs database';
  
    element_mic2.appendChild(new_a3);
    event.target.style.visibility = (false) ? 'visible' : 'hidden';
    let element_mic1 = document.getElementById('mic1');
    element_mic1.style.visibility = (true) ? 'visible' : 'hidden';
  
  });