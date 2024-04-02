let expense = [];
let totalamount = 0;
const catSelect = document.getElementById('category-select');
const amntInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expTablBody = document.getElementById('expense-table-body');
const totamntCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function(){
    const cat = catSelect.value; // Corrected accessing category value
    const amnt = Number(amntInput.value);
    const date = dateInput.value;
    if(cat === ''){
        alert('Please Select a Category');
        return;
    }
    if(isNaN(amnt) || amnt <= 0){
        alert('Please Enter a valid amount');
        return;
    }
    if(date === ''){
        alert('Please Select a Date');
        return;
    }
    expense.push({cat, amnt, date});
    totalamount += amnt;
    totamntCell.textContent = totalamount;
    const nRow = expTablBody.insertRow();
    const catCell = nRow.insertCell();
    const amntCell = nRow.insertCell();
    const dateCell = nRow.insertCell();
    const delCell = nRow.insertCell();
    const delbtn = document.createElement('button');
    delbtn.textContent = 'Delete';
    delbtn.classList.add('delete-btn');
    delbtn.addEventListener('click', function(){
        const index = expense.findIndex(e => e.cat === cat && e.amnt === amnt && e.date === date);
        totalamount -= expense[index].amnt;
        totamntCell.textContent = totalamount;
        expense.splice(index, 1);
        expTablBody.removeChild(nRow);
    });
    catCell.textContent = cat; // Corrected accessing category
    amntCell.textContent = amnt;
    dateCell.textContent = date;
    delCell.appendChild(delbtn);
});

