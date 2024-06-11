document.getElementById('form2').addEventListener('submit',function(event){
    event.preventDefault()

    document.getElementById('options').classList.remove('error');
    document.getElementById('ArtClassError1').style.display = 'none';
    document.getElementById('ArtClassError2').style.display = 'none';
    document.getElementById('Slot').classList.remove('error');
    document.getElementById('SlotError1').style.display = 'none';
    document.getElementById('participantsNum').classList.remove('error');
    document.getElementById('ParticipantError1').style.display = 'none';
    document.getElementById('ParticipantError2').style.display = 'none';
    document.getElementById('displaynone').style.display = 'none';
    document.getElementById('displaynone2').style.display = 'none';


    let infoholder ={
        options : document.getElementById('options').value,
        Slot:  document.getElementById('Slot').value,
        participantsNum :  document.getElementById('participantsNum').value,
    }

    if(infoholder.options === ""){
        document.getElementById('options').classList.add('error');
        document.getElementById('ArtClassError1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(infoholder.options ==="Painting"){
        document.getElementById('options').classList.add('error');
        document.getElementById('ArtClassError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(infoholder.options ==="Sculpture"){
        document.getElementById('options').classList.add('error');
        document.getElementById('ArtClassError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(infoholder.options ==="Photography"){
        document.getElementById('options').classList.add('error');
        document.getElementById('ArtClassError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(infoholder.options ==="Cinema"){
        document.getElementById('options').classList.add('error');
        document.getElementById('ArtClassError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(infoholder.options ==="Theater"){
        document.getElementById('options').classList.add('error');
        document.getElementById('ArtClassError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(infoholder.options ==="filmMaking"){
        document.getElementById('options').classList.add('error');
        document.getElementById('ArtClassError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    } 
    if(infoholder.Slot ===""){
        document.getElementById('Slot').classList.add('error');
        document.getElementById('SlotError1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(infoholder.participantsNum ===""){
        document.getElementById('participantsNum').classList.add('error');
        document.getElementById('ParticipantError1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(isNaN(infoholder.participantsNum )){
        document.getElementById('participantsNum').classList.add('error');
        document.getElementById('ParticipantError2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(infoholder.options ==="Drawing"){
        document.getElementById('displaynone').style.display = 'block';
        alert("Registered Sucessfully");
    }else if(infoholder.options ==="Music"){
        document.getElementById('displaynone2').style.display = 'block';
        alert("Registered Sucessfully");
    }


    const price = 400
    let sun = "$"
    if (infoholder.Slot == 1){
       let jack = document.getElementById('cost')
       jack.innerText = sun + price * infoholder.Slot
    }else if (infoholder.Slot == 2){
        let jack = document.getElementById('cost')
        jack.innerText = sun + price * infoholder.Slot
    }else if (infoholder.Slot == 3){
        let jack = document.getElementById('cost')
        jack.innerText = sun + price * infoholder.Slot
    }else if (infoholder.Slot == 4){
        let jack = document.getElementById('cost')
        jack.innerText = sun + price * infoholder.Slot
    }

    const result = 250
    let dollar = "$"
    if (infoholder.Slot == 1){
        let bring = document.getElementById('cost1')
        bring.innerText = dollar + result * infoholder.Slot
    }else if (infoholder.Slot == 2){
        let bring = document.getElementById('cost1')
        bring.innerText = dollar + result * infoholder.Slot
    }else if (infoholder.Slot == 3){
        let bring = document.getElementById('cost1')
        bring.innerText = dollar + result * infoholder.Slot
    }else if (infoholder.Slot == 4){
        let bring = document.getElementById('cost1')
        bring.innerText = dollar + result * infoholder.Slot
    }

})
