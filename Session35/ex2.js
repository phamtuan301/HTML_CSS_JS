document.getElementById("addbookmark-btn").onclick = function () {
  document.getElementById("background").style.display = "block";
};
document.getElementById("back").onclick = function closeModal() {
  document.getElementById("background").style.display = "none";
};
document.addEventListener("DOMContentLoaded", loadBookmarks);
document.getElementById("save").onclick = function addBookmark() {
  let name = document.getElementById("input-name").value;
  let url = document.getElementById("input-url").value;

  if (!name || !url) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  document.getElementById("background").style.display = "none";
  loadBookmarks();
};
function loadBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  let list = document.getElementById("bookmark-list");
  list.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    let div = document.createElement("div");
    div.className = "bookmark";
    div.innerHTML = `
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
            <button class="delete" onclick="deleteBookmark(${index})">Xóa</button>
        `;
    list.appendChild(div);
  });
}

function deleteBookmark(index) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  loadBookmarks();
}
