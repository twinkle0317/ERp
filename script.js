// Toggle Sidebar for Mobile Responsiveness
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }
  
  // Animate Attendance Bar Graph on the Attendance Page
  function animateBars() {
    const bars = document.querySelectorAll('.chart-container .bar');
    bars.forEach(bar => {
      // Read the data-percentage attribute and apply as height (percentage of the container's height)
      const percentage = bar.getAttribute('data-percentage');
      bar.style.height = percentage + '%';
    });
  }
  
  // Run animation only if the attendance chart exists on the page
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.chart-container')) {
      animateBars();
    }
  });
  