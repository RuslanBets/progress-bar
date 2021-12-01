const btn = document.querySelector('.btn')
const bar = document.querySelector('.percentage')


btn.onclick = updateProgress 

function updateProgress() {
  let num = Math.floor(Math.random() * 101)
  bar.style.width = num + '%'
  bar.dataset.value = num + '%'
}


