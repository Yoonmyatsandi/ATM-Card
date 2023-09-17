const inputNumber = document.querySelector('.input-number');
const inputHolder = document.querySelector('.input-holder');
const cvvInput = document.querySelector('.cvv');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const cardNo = document.querySelector('.card-no');
const cardHolder = document.querySelector('.card-holder');
const cvvBox = document.querySelector('.cvv-box');
const inputMm = document.querySelector('.input-mm');
const expireMm = document.querySelector('.expire-mm');
const inputYy = document.querySelector('.input-yy');
const expireYy = document.querySelector('.expire-yy');

// Update card number when the input changes
inputNumber.addEventListener('input', () => {
    cardNo.innerText = inputNumber.value;
});

// Update card holder when the input changes
inputHolder.addEventListener('input', () => {
    cardHolder.innerText = inputHolder.value;
});

inputMm.addEventListener('input', () => {
    expireMm.innerText = inputMm.value;
});

inputYy.addEventListener('input', () => {
    expireYy.innerText = inputYy.value;
});


inputHolder.addEventListener('input', () => {
    cardHolder.innerText = inputHolder.value;
});

inputHolder.addEventListener('input', () => {
    cardHolder.innerText = inputHolder.value;
});

// Handle mouseenter and mouseleave for CVV
cvvInput.addEventListener('mouseenter', () => {
    cardFront.style.transform = 'perspective(1000px) rotateY(-180deg)';
    cardBack.style.transform = 'perspective(1000px) rotateY(0deg)';
});

cvvInput.addEventListener('mouseleave', () => {
    cardFront.style.transform = 'perspective(1000px) rotateY(0deg)';
    cardBack.style.transform = 'perspective(1000px) rotateY(-180deg)';
});

// Update CVV box text when the input changes
cvvInput.addEventListener('input', () => {
    cvvBox.innerText = cvvInput.value;
});
