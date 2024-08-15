var paragraphs, images, headers;


paragraphs = ['Built during the Spanish Civil War as an anti-aircraft battery to defend the city from fascist bombings, the Bunkers del Carmel witnessed one of Barcelona’s most challenging historical chapters. After the war, these spaces were abandoned and fell into ruin until the 1990s, when restoration began, transforming them into an exceptional viewpoint. Since then, the Turó de la Rovira viewpoint has become part of the city’s heritage and one of the locations of the MUHBA – Barcelona History Museum.  Today, the Bunkers del Carmel symbolize the city’s resilience and resistance. Their historical value is complemented by the impressive 360-degree panoramic view of Barcelona they offer. From the top of Turó de la Rovira, you can see the entire city, from the Sagrada Familia to the Mediterranean Sea, including the Gothic Quarter, Park Güell, and the mountains surrounding the city.',
  ' El Born Centre de Cultura i Memòria is an impressive cultural center built around the excavated remains of a medieval neighborhood. The site provides a unique glimpse into life in Barcelona during the 1700s, with streets, homes, and shops preserved beneath the striking iron-and-glass market hall.  Guided tours are available to enhance your understanding of the site\'s historical significance. Check the center’s schedule for cultural events and temporary exhibitions.', 
  'Refugi 307 is one of the many air raid shelters built during the Spanish Civil War to protect civilians from bombings. Located in the Poble-sec neighborhood, this well-preserved shelter offers a poignant reminder of Barcelona\'s turbulent past. Visits to Refugi 307 are by guided tour only, so it\'s best to book in advance. Tours are available in multiple languages, providing comprehensive insights into the shelter’s history.',
  'Beneath the Barcelona City History Museum (MUHBA) in the Gothic Quarter lies the ancient ruins of Roman Barcino. This archaeological site reveals the foundations of the city, dating back to the 1st century BC, and includes streets, houses, and public buildings.  Allow plenty of time to explore the museum’s extensive exhibits above ground before descending to the Roman ruins. Audio guides are available to enhance your visit.',
  'Palau Güell, designed by the renowned architect Antoni Gaudí, features an intriguing basement that once housed stables and servants’ quarters. The basement’s unique architecture, with its parabolic arches and atmospheric lighting, showcases Gaudí’s innovative use of space and design. The basement is included in the general tour of Palau Güell, so you can explore the entire building in one visit. Guided tours are recommended to fully appreciate Gaudí\'s genius.'];
images = ['https://eaqxr36k8gu.exactdn.com/wp-content/uploads/2022/03/miradores-Barcelona-Bunkers-Carmel.jpg',
'https://upload.wikimedia.org/wikipedia/commons/7/71/El_Born_Centre_de_Cultura_i_Mem%C3%B2ria_%2832715417280%29.jpg',
'https://api.nnhotels.com/storage/171219/5a58ce53eca45bad3b1b015a/xl/refugi-307-bcnjpg-2.jpg', 
'https://agora.xtec.cat/ceipelspins/wp-content/uploads/usu319/2022/11/ROMAN-BARCINO-PORTADA-scaled.jpg', 
'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/348000/348254-Palau-Guell.jpg'];
headers = ['Bunkers del Carmel',
   'El Born Centre de Cultura i Memòria',
   'Refugi 307', 
   'Roman Barcino', 
   'Palau Güell Basement'];
let element_span = document.getElementById('span');
headers.push(headers[0]);
element_span.innerText = headers.shift();
element_span.setAttribute("class", 'article a');
let element_main_pargraph = document.getElementById('main_pargraph');
paragraphs.push(paragraphs[0]);
element_main_pargraph.innerText = paragraphs.shift();
let element_img = document.getElementById('img');
images.push(images[0]);
element_img.setAttribute("src", images.shift());
element_img.setAttribute("class", 'article img');


document.getElementById('next').addEventListener('click', (event) => {
  let element_span2 = document.getElementById('span');
  headers.push(headers[0]);
  element_span2.innerText = headers.shift();
  element_span2.setAttribute("class", 'article a');
  let element_main_pargraph2 = document.getElementById('main_pargraph');
  paragraphs.push(paragraphs[0]);
  element_main_pargraph2.innerText = paragraphs.shift();
  let element_img2 = document.getElementById('img');
  images.push(images[0]);
  element_img2.setAttribute("src", images.shift());
  element_img2.setAttribute("class", 'article img');

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_span3 = document.getElementById('span');
  headers.unshift(headers.slice(-1)[0]);
  element_span3.innerText = headers.pop();
  element_span3.setAttribute("class", 'article a');
  let element_main_pargraph3 = document.getElementById('main_pargraph');
  paragraphs.unshift(paragraphs.slice(-1)[0]);
  element_main_pargraph3.innerText = paragraphs.pop();
  let element_img3 = document.getElementById('img');
  images.unshift(images.slice(-1)[0]);
  element_img3.setAttribute("src", images.pop());
  element_img3.setAttribute("class", 'article img');

});