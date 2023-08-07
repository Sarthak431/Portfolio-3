const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
  }
});