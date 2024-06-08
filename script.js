document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()

    document.getElementById('Fullname').classList.remove('error');
    document.getElementById('FullnameError1').style.display = 'none';
    document.getElementById('FullnameError2').style.display = 'none';
    document.getElementById('Email').classList.remove('error');
    document.getElementById('EmailError1').style.display = 'none';
    document.getElementById('EmailError2').style.display = 'none';
    document.getElementById('Username').classList.remove('error');
    document.getElementById('UsernameError1').style.display = 'none';
    document.getElementById('Age').classList.remove('error');
    document.getElementById('AgeError1').style.display = 'none';
    document.getElementById('AgeError2').style.display = 'none';
    document.getElementById('AgeError3').style.display = 'none';
    document.getElementById('Phone').classList.remove('error');
    document.getElementById('PhoneError1').style.display = 'none';
    document.getElementById('PhoneError2').style.display = 'none';
    document.getElementById('PhoneError3').style.display = 'none';

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // let Email = document.getElementById('Email').value;
    
    let formholder = {
        Fullname : document.getElementById('Fullname').value,
        Email : document.getElementById('Email').value,
        Username : document.getElementById('Username').value,
        Age: document.getElementById('Age').value,
        Phone: document.getElementById('Phone').value,
    }

    if (formholder.Fullname ===""){
        document.getElementById('Fullname').classList.add('error');
        document.getElementById('FullnameError1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(!isNaN(formholder.Fullname)){
        document.getElementById('Fullname').classList.add('error');
        document.getElementById('FullnameError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(formholder.Email===""){
        document.getElementById('Email').classList.add('error');
        document.getElementById('EmailError1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(emailRegex.test(formholder.Email)){
        document.getElementById('Email').classList.remove('error');
        document.getElementById('EmailError2').style.display = 'none';
        error = false
    }else{
        document.getElementById('Email').classList.add('error');
        document.getElementById('EmailError2').style.display = 'block';
        error = true
        return false
    }
    if(formholder.Username ===""){
        document.getElementById('Username').classList.add('error');
        document.getElementById('UsernameError1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(formholder.Age ===""){
        document.getElementById('Age').classList.add('error');
        document.getElementById('AgeError1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(formholder.Age < 18){
       alert('Minor');
       window.location.href = 'Guardiandetail.html';
        error = true
        return false
    }else{
        error = false
    }
    if(isNaN(formholder.Age)){
        document.getElementById('Age').classList.add('error');
        document.getElementById('AgeError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(formholder.Phone === ""){
        document.getElementById('Phone').classList.add('error');
        document.getElementById('PhoneError1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(formholder.Phone.length < 11 || formholder.Phone.length > 11 ){
        document.getElementById('Phone').classList.add('error');
        document.getElementById('PhoneError3').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    } 
    if(isNaN(formholder.Phone)){
        document.getElementById('Phone').classList.add('error');
        document.getElementById('PhoneError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
        let formholderjson = JSON.stringify(formholder);
        localStorage.setItem('userDetails', formholderjson);
        window.location.href = 'dateandtime.html'
    }
   
})  