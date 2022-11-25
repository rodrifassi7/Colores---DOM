const boton = document.querySelector('.button')
const colorDeFondo = document.querySelector('.colorFondo')



boton.addEventListener('click', () => {
  const randomColor = getColor()
  console.log(randomColor)

  document.body.style.background = colores[randomColor];
  colorDeFondo.textContent = colores[randomColor]
})



// colorDeFondo.innerText = colores.id


const getColor = () => {
  
  return Math.floor(Math.random() * colores.length)
  
  
}