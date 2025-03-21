document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Thank you for your purchase!');
    });
});
