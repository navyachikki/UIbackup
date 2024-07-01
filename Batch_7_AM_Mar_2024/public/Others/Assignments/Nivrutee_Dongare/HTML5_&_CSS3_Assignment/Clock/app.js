document.addEventListener('DOMContentLoaded', () => {
    const clock = document.querySelector('.clock');
    const radius = clock.offsetWidth / 2;
    const numbers = clock.querySelectorAll('.num');
  
    numbers.forEach((number, index) => {
      const angle = (index + 1) * (360 / 12);
      const radians = (angle * Math.PI) / 180;
      const x = radius + (radius - 110) * Math.sin(radians);
      const y = radius - (radius - 110) * Math.cos(radians);
      number.style.left = `${x}px`;
      number.style.top = `${y}px`;
    });

    function updateClock() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours() % 12;

      const secondAngle = (seconds / 60) * 360;
      const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
      const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30;

      document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
      document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
      document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the clock hands immediately
  });