form = document.querySelector('.form_item');
list = document.querySelector('ul');
title1 = document.querySelector('.title1');

let curListItem;
localStorage.clear();
const createListElement = (listItemObject) => {

    const listItem = document.createElement('LI');
    listItem.classList.add('list_item');
    listItem.setAttribute('id',listItemObject.id);
    
    const listItemDiscription = document.createElement('DIV');
    listItemDiscription.classList.add('list_item_discription');
    
    const listItemName = document.createElement('DIV');
    listItemName.classList.add('list_item_name');
    listItemName.innerText = listItemObject.name;
    
    const quantitySign = document.createElement('DIV');
    quantitySign.classList.add('sign');
    quantitySign.innerHTML =  `<i class="fas fa-times"></i>`;

    const listItemQuantity = document.createElement('DIV');
    listItemQuantity.classList.add('list_item_quantity');
    listItemQuantity.innerText =  listItemObject.quantity;

    listItemDiscription.append(listItemName);
    listItemDiscription.append(quantitySign);
    listItemDiscription.append(listItemQuantity);

    const editButton = document.createElement('DIV');
    editButton.classList.add('edit');
    editButton.innerHTML =`<i class="fas fa-user-edit"></i>`;


    const deleteButton = document.createElement('DIV');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
   
    listItem.append(listItemDiscription);
    listItem.append(editButton);
    listItem.append(deleteButton);

    return listItem ;
}


const updateLocalStorage = () => {
  
    
    let grocery_list = [];
    Array.from(list.children).forEach((listItem) => {
        const obj = {
            name : listItem.children[0].children[0].innerText,
            quantity :  listItem.children[0].children[2].innerText,
            id : listItem.getAttribute("id")
         };
         grocery_list.push(obj);
    });
    localStorage.setItem("itemList", JSON.stringify(grocery_list));

};

  
const renderLocalStorage = () => {
  
    if (!localStorage.hasOwnProperty("itemList")) return;
    console.log(localStorage.hasOwnProperty("itemList"));
    const storedData = JSON.parse(localStorage.getItem("itemList"));
    
    storedData.forEach((listData)=>{
        listItem = createListElement(listData);
        list.append(listItem);
    })
  
};

renderLocalStorage();

const resetForm = (formObject) => {
     
    formObject.item_name.value = "";
    formObject.item_quantity.value = "";
}


const checkElement = (listItemObject) => {
     
    let check = false;
    Array.from(list.children).forEach((listItem) => {
        
        let name = listItem.children[0].children[0].innerText;
        let quantityDiv = listItem.children[0].children[2];

        if(name === listItemObject.name){
            quantityDiv.innerText =  parseInt(quantityDiv.innerText)+ parseInt(listItemObject.quantity);
            check=true;
        }
    });

    return check;
};

form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    const name = form.item_name.value;
    const quantity = form.item_quantity.value;

    const obj = {
        name : name,
        quantity : quantity,
        id : Math.random()
    };
    
    if(form.classList.contains('add_item')){

        if(checkElement(obj) == false){
           listItem = createListElement(obj);
           list.append(listItem);
        }

     }else{

        if(checkElement(obj) == true){
            list.removeChild(curListItem);
        }else{
        curListItem.children[0].children[0].innerText = name;
        curListItem.children[0].children[2].innerText = quantity;
        }
        form.classList.remove('edit_item');
        form.classList.add('add_item');
        form.add_edit_button.innerText = "Add";
        title1.innerText = "Add Grocery Item";
        
     }
     updateLocalStorage();

     resetForm(form);
});

const editListItem = (curListItem) => {
    
    form.item_name.value = curListItem.children[0].children[0].innerText;
    form.item_quantity.value = curListItem.children[0].children[2].innerText;
    form.classList.add('edit_item');
    form.classList.remove('add_item');
    form.add_edit_button.innerText = "Edit";
    title1.innerText = "Edit Grocery Item";
}

list.addEventListener('click',(e)=>{

    if(e.target.tagName == 'I'){
         
        if(e.target.parentElement.classList.contains('delete') === true){
            list.removeChild(e.target.parentElement.parentElement);
            updateLocalStorage();
        }else{
            curListItem = e.target.parentElement.parentElement ;
            editListItem(curListItem);
        }
    }
});




