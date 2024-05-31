import { useEffect } from 'react';

const NavHighlight = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll('.display-nav-item');
    const highlight = document.querySelector('.highlight');

    function moveHighlight(element) {
      const itemRect = element.getBoundingClientRect();
      const containerRect = document.querySelector('.display-nav-container').getBoundingClientRect();
      highlight.style.width = `${itemRect.width}px`;
      highlight.style.left = `${itemRect.left - containerRect.left}px`;
    }

    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        moveHighlight(item);
      });
    });

    // Move highlight under the initially active item
    const activeItem = document.querySelector('.display-nav-item.active');
    if (activeItem) {
      moveHighlight(activeItem);
    }
  }, []);

  return null;
};

export default NavHighlight;