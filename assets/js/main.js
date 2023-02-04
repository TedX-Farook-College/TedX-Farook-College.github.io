/* ============================= Navigation Menu =============================   */
const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
document.onclick = function(e){
    if(e.target.id !=='sidebar' && e.target.id !=='toggle')
    {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}
toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active')
}

/* ============================= Navbar =============================   */
window.addEventListener('scroll', () => {
  var nav = document.querySelector('.nav')
  if (window.pageYOffset > 80) {
    nav.classList.add('nav-bg')
  } else {
    nav.classList.remove('nav-bg')
  }
})

/* ============================= Tab Section =============================   */
function setupTab() {
  document.querySelectorAll('.tab__button').forEach((button) => {
    button.addEventListener('click', () => {
      const sideBar = button.parentElement
      const tabContainer = sideBar.parentElement
      const tabNumber = button.dataset.forTab
      const tabToActivate = tabContainer.querySelector(
        `.tab__content[data-tab="${tabNumber}"]`,
      )
      sideBar.querySelectorAll('.tab__button').forEach((button) => {
        button.classList.remove('tab__button--active')
      })
      tabContainer.querySelectorAll('.tab__content').forEach((tab) => {
        tab.classList.remove('tab__content--active')
      })

      button.classList.add('tab__button--active')
      tabToActivate.classList.add('tab__content--active')
    })
  })
}
document.addEventListener('DOMContentLoaded', () => {
  setupTab()
})

/* ============================= Form Submission =============================   */
// https://script.google.com/macros/s/AKfycbx_14O6RMRre_yHLC-ML5zQUwJyJuFDb2IYfKelWykpj11u3C3nlFdkJJrxOtZu5y-Q/exec

// $("#submit-form").submit((e)=>{
//   e.preventDefault()
//   $.ajax({
//       url:"",
//       data:$("#submit-form").serialize(),
//       method:"post",
//       success:function (response){
//           alert("Form submitted successfully!!")
//           window.location.reload()
//       },
//       error:function (err){
//           alert("Something Error Occured!!")
//       }
//   })
// })
