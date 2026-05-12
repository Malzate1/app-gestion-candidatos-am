import Swal from "sweetalert2";

export function redirect(message, url, icono) {
  let timerInterval;
  Swal.fire({
    title: message,
    html: "I will close in <b></b> milliseconds.",
    icon: icono,
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      window.location.href = url;
    },
  });
}

export function confirm(
  title,
  text,
  icon,
  textConfirm,
  candidates,
  id,
  fetchData,
) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: textConfirm,
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(candidates + "/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          fetchData();
        });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}
