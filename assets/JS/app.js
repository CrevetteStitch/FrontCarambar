console.log('Hello World!');
const btn = document.getElementById('randomBtn');
const result = document.getElementById('result');

btn.addEventListener('click', async () => {
  const res = await fetch("https://examcarambar.onrender.com/api/v1/");
  const data = await res.json();
  console.log(data);
  result.textContent = data.examcarambar.name;
});

