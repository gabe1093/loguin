function enviar(){
    
event.preventDefault()

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Desejá se cadastrar?",
    text: "escolha",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Se cadastrar",
    cancelButtonText: "Cancelar cadastro!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Cadastro",
        text: "Você se cadastrou",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "Cadastro cancelado ",
        icon: "error"
      });
    }
  });





}




