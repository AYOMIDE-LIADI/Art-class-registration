document.getElementById('form3').addEventListener('submit', function(event){
    event.preventDefault()

    document.getElementById('GuardianName').classList.remove('error');
    document.getElementById('GuardianError0').style.display ='none';
    document.getElementById('GuardianError1').style.display ='none';
    document.getElementById('Addressinput').classList.remove('error');
    document.getElementById('AddressError1').style.display ='none';
    document.getElementById('PhoneNumber').classList.remove('error');
    document.getElementById('PhoneNumberError01').style.display ='none';
    document.getElementById('PhoneNumberError02').style.display ='none';
    document.getElementById('PhoneNumberError03').style.display ='none';


    let Guardiandetail ={
        GuardianName : document.getElementById('GuardianName').value,
        Addressinput: document.getElementById('Addressinput').value,
        PhoneNumber:document.getElementById('PhoneNumber').value,
    }

    if(Guardiandetail.GuardianName ===""){
        document.getElementById('GuardianName').classList.add('error');
        document.getElementById('GuardianError1').style.display ='block';
        error = true
        return false
    }else{
        error = false
    }
    if(!isNaN (Guardiandetail.GuardianName)){
        document.getElementById('GuardianName').classList.add('error');
        document.getElementById('GuardianError0').style.display ='block';
        error = true
        return false
    }else{
        error = false
    }
    if(Guardiandetail.Addressinput ===""){
        document.getElementById('Addressinput').classList.add('error');
        document.getElementById('AddressError1').style.display ='block';
        error = true
        return false
    }else{
        error = false
    }
    if(Guardiandetail.PhoneNumber ===""){
        document.getElementById('PhoneNumber').classList.add('error');
        document.getElementById('PhoneNumberError03').style.display ='block';
        error = true
        return false
    }else{
        error = false
    }
    if(isNaN (Guardiandetail.PhoneNumber)){
        document.getElementById('PhoneNumber').classList.add('error');
        document.getElementById('PhoneNumberError01').style.display ='block';
        error = true
        return false
    }else{
        error = false
    }
    if(Guardiandetail.PhoneNumber.length < 11 || Guardiandetail.PhoneNumber.length > 11 ){
        document.getElementById('PhoneNumber').classList.add('error');
        document.getElementById('PhoneNumberError02').style.display = 'block';
        error = true
        return false
    }else{
        error = false
        window.location.href = 'dateandtime.html'
    } 
})