const randomLinks = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://science.nasa.gov/gallery/stars-images/",
    "https://x.com/SPACEdotcom/status/1398436675517300737/photo/1",
    "https://lkml.org/lkml/1996/7/20/1",
    "https://earth.google.com/web/@41.90217397,12.45630136,19.13366868a,392.23729528d,35.00007006y,-92.18650768h,87.07521816t,0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA",
    "https://github.com/NVIDIA/Cosmos",
    "https://www.youtube.com/watch?v=4UmTecvvQZI"
  ];

  document.querySelectorAll('#luck').forEach(link => {
    link.href = randomLinks[Math.floor(Math.random() * randomLinks.length)];
  });