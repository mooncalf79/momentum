const images = ["0.jpg","1.jpg","2.jpg"];

///이미지를 랜덤하게 나오게 
const chosenImage = images[Math.floor(Math.random() * images.length)];

///랜덤하게 가져온 이미지를 html에 심기 
/// bgImage에 createElement를 이용해서 img를 넣고, bgImage.src속성에 텍스트로 넣는다
/// ₩₩ 이거 이용해서 
const bgImage = document.createElement("img");

///html 코드화 하기 
bgImage.src = `img/${chosenImage}`;

///appendchild 는 앞에서 호출한 위치에 () 안에 내용을 넣는다. 
document.body.appendChild(bgImage);

