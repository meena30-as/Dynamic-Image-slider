# Dynamic-Image-slider
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Image Slider</title>
  <style>

    * {
      box-sizing: border-box;
    }

    body {

      font-family: Arial, sans-serif;
      background-color: #f7f8fa;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .slider {
      position: relative;
      width: 80%;
      max-width: 700px;
      height: 400px;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .slides {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .slides img {
      width: 100%;
      border-radius: 15px;
    }

    .buttons {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
    }

    button {
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 18px;
      border-radius: 5px;
    }

    button:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  </style>
</head>
<body>
  

  <div class="slider">
    <h1 style="text-align: center;">Dynamic image slider</h1>
    <div class="slides" id="slides">
      <!-- Images will be added dynamically using JS -->
    </div>

    <div class="buttons">
      <button onclick="prevSlide()">❮ Prev</button>
      <button onclick="nextSlide()">Next ❯</button>
    </div>
  </div>

  <script>
    // Array of image URLs (you can change these to your own images)
    const images = [
      "https://picsum.photos/id/1018/800/400",
      "https://picsum.photos/id/1025/800/400",
      "https://picsum.photos/id/1037/800/400",
      "https://picsum.photos/id/1043/800/400",
      "https://picsum.photos/id/1052/800/400"
    ];

    const slidesContainer = document.getElementById('slides');

    // Dynamically add images
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      slidesContainer.appendChild(img);
    });

    let currentIndex = 0;

    function showSlide(index) {
      if (index >= images.length) currentIndex = 0;
      else if (index < 0) currentIndex = images.length - 1;
      else currentIndex = index;
      
      slidesContainer.style.transform = 'translateX(${-currentIndex * 100}%)';
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);
  </script>

</body>
</html>
