const countrySelectTag=document.getElementById('country')
const citySelectTag=document.getElementById('city')
const ticketForm=document.getElementById('ticket-form')
const InputsTag=document.querySelectorAll('.check-value')
const warningMessage=document.querySelectorAll('.warning')
const successMessage=document.querySelectorAll('.success')
const countryValid=document.getElementById('country-valid')
const countryInValid=document.getElementById('country-invalid')
let validation,i,newOption,newItemTag;
let arr=[]
let isvalid=false
let dataObj={
    iran:['Tehran','Isfehan','Tabriz','Qom','Shiraz'],
    usa:['Miami','Los Vegas','Atlanta','Chicago'],
    canada:['Torento','Quebec','Vancouver','Montreal']
}
function show_valid_country_message() {
    countrySelectTag.classList.add('green-border')
    countryValid.style.display='inline-block'
    countryInValid.style.display='none'
}
function show_invalid_country_message() {
    countrySelectTag.classList.add('red-border')
    countryValid.style.display='none'
    countryInValid.style.display='inline-block'
}
countrySelectTag.addEventListener('change',function () {
    newItemTag=document.querySelectorAll('.newItem')
    newItemTag.forEach(function (item) {
        item.remove()
    })
    let countryValue=countrySelectTag.value
    let countryTarget=dataObj[countryValue]
    countryTarget.forEach(function (item) {
        newOption=document.createElement('option')
        newOption.innerHTML=item
        newOption.setAttribute('class','newItem')
        newOption.setAttribute('value',item)
        newOption.setAttribute('selected','selected')
        citySelectTag.append(newOption)
    })

})
InputsTag.forEach(function (item) {
    arr.push(item)
})
ticketForm.addEventListener('submit',function (event) {
    if(!isvalid){
        i=0
        InputsTag.forEach(function (item) {
            if(item.value===''){
                isvalid=false
                event.preventDefault()
                item.classList.add('red-border')
                warningMessage[i].style.display='inline-block'
                successMessage[i].style.display='none'
            }else{
                isvalid=false
                event.preventDefault()
                item.classList.add('green-border')
                successMessage[i].style.display='inline-block'
                warningMessage[i].style.display='none'
            }
            i++
        })
        validation=arr.every(function (item) {
            return isNaN(item.value)
        })
        if(!validation){
            if(countrySelectTag.value ==='default'){
                show_invalid_country_message()
                event.preventDefault()
            }else{
                show_valid_country_message()
                isvalid=true
            }
        }else{
            if(countrySelectTag.value ==='default'){
                show_invalid_country_message()
                event.preventDefault()
            }else{
                show_valid_country_message()
                event.preventDefault()
            }
        }
    }else{
        ticketForm.reset()
    }
})
function show_message(tag) {
    let parent=tag.parentElement
    let parentChild=parent.children
    let warningMessageTarget=parentChild[1]
    let successMessageTarget=parentChild[2]
    if(tag.value!==''){
        tag.classList.add('green-border')
        successMessageTarget.style.display='inline-block'
        warningMessageTarget.style.display='none'
    }else{
        tag.classList.add('red-border')
        successMessageTarget.style.display='none'
        warningMessageTarget.style.display='inline-block'
    }
}


