 







// even ketika tombol di klik
let int1 = []
let arit = ''
let int2 = []
let text 
let inn

$('.tombol').addEventListener('click', e => { 
 if(e.target.tagName === 'BUTTON') { // ketika semua tombol button di klik
  if(!e.target.classList.contains('aksi')){ // ketika e.target = number
   inn = int1
  }else if(e.target.classList.contains('aksi')) { //ketika yg di klik aritmatika + - x / =
   inn = int2
   arit = e.target.innerHTML
  }
  isiInt(inn, e.target.innerHTML)
  // text + e.target.innerHTML 
   text = `${int1} ${arit} ${int2.join}`
  console.log(int1)
  console.log(text)
 }
 // $('input').value = int.join('')
})


function isiInt(arr, html) {
 arr.push(html)
}

function tambah(a, b) {
 return a + b
}


function $(params) { 
 return document.querySelector(params)
}



