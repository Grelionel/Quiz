document.addEventListener('DOMContentLoaded', () => {
  const buttonContainer = document.getElementById("button-container");
  const spinner = document.getElementById("spinner");

  if (!buttonContainer || !spinner) {
    console.error("Button container or spinner element not found");
    return;
  }

  function showSpinnerAndRedirect(url) {
    buttonContainer.style.transition = "opacity 0.3s ease";
    buttonContainer.style.opacity = "0";
    setTimeout(() => {
      buttonContainer.style.display = "none";
      spinner.style.opacity = "0";
      spinner.style.display = "block";
      setTimeout(() => {
        spinner.style.transition = "opacity 0.3s ease";
        spinner.style.opacity = "1";
      }, 10); 
      setTimeout(() => {
        spinner.style.opacity = "0";
        setTimeout(() => {
          spinner.style.display = "none";
          try {
            window.location.href = url;
          } catch (error) {
            console.error("Redirect failed:", error);
            spinner.style.display = "none";
            buttonContainer.style.display = "flex";
            buttonContainer.style.opacity = "1";
          }
        }, 2000); 
      }, 1000); 
    }, 10); 
  }

  const buttons = {
    "eco-dime": "selectPosition.html",
    "jeunesse": "selectPosition.html",
    "responsables": "selectPosition.html",
    "biblical": "selectLevelsBiblical.html",
    "general": "selectLevelsGeneral.html"
  };

  Object.entries(buttons).forEach(([id, url]) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => showSpinnerAndRedirect(url));
    } else {
      console.warn(`Button with ID ${id} not found`);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.round-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.disabled = true);
      button.disabled = false;
    });
  });
});