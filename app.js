function toggleStrikeThrough(checkbox) {
  const listItem = checkbox.parentNode;
  if (checkbox.checked) {
    listItem.style.textDecoration = "line-through";
  } else {
    listItem.style.textDecoration = "none";
  }
}