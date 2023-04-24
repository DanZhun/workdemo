import Swal from 'sweetalert2'

export const sweetAlert = (title, content, icon) => {
  Swal.fire(
    title,
    content,
    icon
  )
}

export const showToast = (title, icon) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon,
    title
  })
}