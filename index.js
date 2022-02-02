//   Toast JS Start
window.onload = (event) => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });