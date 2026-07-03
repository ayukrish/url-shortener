async function shorten(params) {
  const url = document.getElementById('url').value;

  const response = await fetch("/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  });

  const data = await response.json();
  document.getElementById("result").innerHTML = `<a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
}