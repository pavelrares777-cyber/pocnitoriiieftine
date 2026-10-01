let cart=[];
function add(name,price){cart.push({name,price});render();openCart()}
function render(){document.getElementById('count').textContent=cart.length;document.getElementById('items').innerHTML=cart.length?cart.map((x,i)=>`<div class="item"><span>${x.name}</span><b>${x.price.toFixed(2).replace('.',',')} lei</b></div>`).join(''):'<p style="color:#777">Coșul este gol.</p>';document.getElementById('total').textContent=cart.reduce((s,x)=>s+x.price,0).toFixed(2).replace('.',',')}
function openCart(){document.getElementById('cart').style.display='flex';render()}
function closeCart(){document.getElementById('cart').style.display='none'}
function toggleMenu(){document.getElementById('nav').classList.toggle('open')}
render();
