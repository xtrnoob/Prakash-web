js
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}

function toggleSub(id) {
  const submenu = document.getElementById(id);
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function toggleSearch() {
  const input = document.getElementById('searchBar');
  input.style.display = input.style.display === 'block' ? 'none' : 'block';
}

function searchText() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let text = document.body.innerText.toLowerCase();
  if (text.includes(input)) {
    alert("Text found: " + input);
  }
}

function showContact() {
  alert("WhatsApp: 7706071076");
}

function showComStuff() {
  alert("What do you want? Just write that and DM on WhatsApp given.");
}

function showWebsiteWork() {
  alert("DM on Telegram or Insta!");
}

function showRecovery() {
alert("Send your details and talk with me on Telegram!");
}
