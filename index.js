const calculate = document.querySelector('.btn');
calculate.addEventListener('click', calculateAmount);

const addTip = document.querySelector('.addTip');
addTip.addEventListener('click', showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = 'block';
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector('.bill').value;
    const tip = document.querySelector('#tip').value;

    if (bill === '' || allPeople.length === '' || allPeople.length < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!'
        });
        return false;
    }

    let perPersonBill = bill/allPeople.length;
    let perPersonTip = bill*tip/allPeople.length;
    let perPersonAmount = perPersonBill + perPersonTip;

    perPersonBill = perPersonBill.toFixed(2);
    perPersonTip = perPersonTip.toFixed(2);
    perPersonAmount = perPersonAmount.toFixed(2);

    document.querySelector('.divideBill').textContent = perPersonBill;
    document.querySelector('.divideTip').textContent = perPersonTip;
    document.querySelector('.billAndTip').textContent = perPersonAmount;
}

const addPerson = document.querySelector('.addPerson');
addPerson.addEventListener('click', howManyPeople);

const allPeople = [];

function howManyPeople(e) {
    e.preventDefault(); 

    const divPerson = document.querySelector('.divPerson');
    let imgPerson = document.createElement('img');
    imgPerson.src = 'icons8-body-type-slim-50.png';
    imgPerson.classList.add('person');
    divPerson.appendChild(imgPerson);

    imgPerson.addEventListener('dblclick', ()=> {
        divPerson.removeChild(imgPerson);
        allPeople.shift(1);
    })

    allPeople.unshift(1);
}

gsap.from('.container', {duration:2, xPercent:200, ease: 'bounce'})

