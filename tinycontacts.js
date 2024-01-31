
let contacts = new Array();


function displayElementValue(id, text)
{
    let element = document.getElementById(id);

    
    element.value = text;
}

function getElementValue(id)
{
    let element = document.getElementById(id);
    return element.value;
}

function displayContactNotFound()
{
    alert("Not found");
}

function doSave() 
{
    
   
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    
    let contact = {
        name: name,
        address: address,
        phone: phone
    }

    contacts.push(contact);

    alert(contact.name + " " + contact.address + " "  + contact.phone);
   
}

function doFind()
{
    let name = getElementValue("name");
    let found = false;


    for(let i =0; i < contacts.length; i++) {
     if(name==contacts[i].name)
    {
        found = true;
        displayElementValue("address", contacts[i].address);
        displayElementValue("phone", contacts[i].phone);
    }
  }
   if(!found)
          displayContactNotFound();
   
}