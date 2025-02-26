function openModal(img) {
  document.getElementById("modalImage").src = img.src;
  new bootstrap.Modal(document.getElementById("imageModal")).show();
}
