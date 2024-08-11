var pics;


pics = ['https://i.ibb.co/rwypz2T/260823-0014.png',
    'https://i.ibb.co/vJQ05B2/260823-0010.png',
    'https://i.ibb.co/sHtSV6D/260823-0007.png',
    'https://i.ibb.co/2vsf8zH/260823-0006.png',
    'https://i.ibb.co/gtcthJV/260823-0005.png',
    'https://i.ibb.co/Mc3gdNC/260823-0004.png',
    'https://i.ibb.co/YPSkhCB/241223-0039.png',
    'https://i.ibb.co/d7LG2P3/241223-0034.png',
    'https://i.ibb.co/vzX2GxQ/241223-0025.png',
    'https://i.ibb.co/KqzDMDK/241223-0022.png',
    'https://i.ibb.co/S30ZGkC/241223-0017.png',
    'https://i.ibb.co/p2JVMGd/241223-0016.png',
    'https://i.ibb.co/Pw3kLKj/DSC01547.jpg',
    'https://i.ibb.co/mXPR41M/DSC01544.jpg',
    'https://i.ibb.co/LnCDdSS/DSC01522.jpg',
    'https://i.ibb.co/37sgHJG/DSC00554.jpg',
    'https://i.ibb.co/zS6CwnL/DSC00535.jpg',
    'https://i.ibb.co/D1jppjt/DSC00529.jpg',
    'https://i.ibb.co/pw6jHMK/DSC00528.jpg',
    'https://i.ibb.co/hghnvM7/DSC00525.jpg',
    'https://i.ibb.co/KF59bx4/DSC00518.jpg',
    'https://i.ibb.co/ssmGYJ1/DSC00517.jpg',
    'https://i.ibb.co/fdYgj7q/DSC00511.jpg',
    'https://i.ibb.co/M6wJRDW/DSC01262.jpg',
    'https://i.ibb.co/LJz6c7X/DSC01256.jpg',
    'https://i.ibb.co/HtcJWfh/DSC01252.jpg',
    'https://i.ibb.co/LkxSNhd/DSC01253.jpg',
    'https://i.ibb.co/3sb2GJ0/DSC01250.jpg',
    'https://i.ibb.co/WB4HdHx/DSC01241.jpg',
    'https://i.ibb.co/jLTz9cC/DSC01224.jpg',
    'https://i.ibb.co/kS3sQ5s/DSC01203.jpg',
    'https://i.ibb.co/nj46wsw/DSC01184.jpg',
    'https://i.ibb.co/181BSpc/DSC01178.jpg',
    'https://i.ibb.co/Z2hHn6M/DSC00676.jpg',
    'https://i.ibb.co/k9Fz3D0/DSC00677.jpg',
    'https://i.ibb.co/zXYTPQV/DSC00667.jpg',
    'https://i.ibb.co/F7VFRzv/DSC00605.jpg',
    'https://i.ibb.co/W51dqv2/1-353.jpg',
    'https://i.ibb.co/QKG7xsM/1-355.jpg',
    'https://i.ibb.co/ckcpTQJ/1-322.jpg',
    'https://i.ibb.co/w0Jzqcr/1-184.jpg',
    'https://i.ibb.co/VJ3xjhS/1-46.jpg'
];

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