const contanier = document.querySelector('.contanier');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

contanier.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){  /*contains- ozunde bu classi saxlayirsaa..*/
        e.target.classList.toggle ('selected');   /* toogle - varsa silsin yoxdursa elave etsin*/
        
        calculateTotal();
      
    }

});


select.addEventListener('change', function(e){
    calculateTotal();

});

function calculateTotal(){

    let selectedSeatcount = contanier.querySelectorAll('.seat.selected').length;
      let price = select.value;
      count.innerText = selectedSeatcount;
      amount.innerText = selectedSeatcount * price;
}