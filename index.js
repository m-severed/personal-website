  // Get the elements
  const javaIcon = document.getElementById('java-icon');
  const cIcon = document.getElementById('c-icon');
  const codeIcon = document.getElementById('code-icon');

  // Add event listeners for mouse enter and leave
  javaIcon.addEventListener('mouseenter', enlargeIcon);
  javaIcon.addEventListener('mouseleave', resetIconSize);

  cIcon.addEventListener('mouseenter', enlargeIcon);
  cIcon.addEventListener('mouseleave', resetIconSize);

  codeIcon.addEventListener('mouseenter', enlargeIcon);
  codeIcon.addEventListener('mouseleave', resetIconSize);

  // Function to enlarge the icon on mouse enter
  function enlargeIcon(event) {
    const icon = event.target;
    icon.style.fontSize = '24px'; // Adjust the size as needed
  }

  // Function to reset the icon size on mouse leave
  function resetIconSize(event) {
    const icon = event.target;
    icon.style.fontSize = '16px'; // Adjust the default size as needed
  }