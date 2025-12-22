 function highlightBest() {
      const prices = document.querySelectorAll('.price');
      prices.forEach(p => p.classList.remove('highlight'));

      let lowest = prices[0];
      prices.forEach(price => {
        if (+price.textContent.replace('$','') < +lowest.textContent.replace('$','')) {
          lowest = price;
        }
      });
      lowest.classList.add('highlight');
    }