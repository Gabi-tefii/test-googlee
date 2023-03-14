export function showMessage(message, type = "success") {
    Toastify({
      text: message,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: type === "success" ? "purple" : "red",
        color: type === "success" ? "white" : "white",
        border: type === "success" ? "double 4px white" : "solid 3px white",
      },
      // onClick: function () { } // Callback after click
    }).showToast();
}