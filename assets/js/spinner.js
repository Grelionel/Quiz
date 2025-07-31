function showSpinner() {
        const spinner = document.getElementById("spinner");
        spinner.style.display = "block"; 
        setTimeout(() => {
          spinner.style.display = "none"; 
        }, 3000);
      }