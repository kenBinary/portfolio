let cursorTrails: HTMLElement[] = [];

export function customCursor() {
  const customCursor = document.querySelector("#custom-cursor") as HTMLElement;
  customCursor.style.display = "none";
  customCursor.className = "custom-cursor";
  document.body.appendChild(customCursor);

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    customCursor.style.display = "block";
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (customCursor) {
      customCursor.style.left = `${mouseX - 10}px`;
      customCursor.style.top = `${mouseY - 10}px`;
    }

    if (Math.random() > 0.8) {
      createCursorTrail(mouseX, mouseY);
    }
  });

  document.addEventListener("touchstart", () => {
    if (customCursor) {
      customCursor.style.display = "none";
    }
  });
}

function createCursorTrail(x: number, y: number): void {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${x - 3}px`;
  trail.style.top = `${y - 3}px`;
  document.body.appendChild(trail);

  cursorTrails.push(trail);

  setTimeout(() => {
    document.body.removeChild(trail);
    cursorTrails = cursorTrails.filter((t) => t !== trail);
  }, 500);
}
