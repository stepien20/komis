const addBtn=document.querySelector(`#addBtn`)
const findBtn=document.querySelector(`#findBtn`)
const displayBtn=document.querySelector(`#displayBtn`)
const displayList=document.querySelector(`#displayList`)
const Arr=[{
    "id": "383cfd85-f9ea-4771-a599-c51d03db89db",
    "marka": "BMW",
    "model": "asas",
    "rokProdukcji": "2222",
    "kolor": "grr",
    "przebieg": "444"
  },{
    "id": "6bdb76d1-2f92-4713-a65d-4b049cea0ec6",
    "marka": "Ford",
    "model": "fff",
    "rokProdukcji": "1111",
    "kolor": "rrr",
    "przebieg": "666"
  }
]
function deleteElement(id,Arr,button){
    
    index=Arr.findIndex((obj)=>obj.id==id)
    console.log(id,index,Arr[0].id)
    if(index>=0){
        Arr.splice(index,1)
        console.log("usunieto")
        const li = button.target.parentNode;
        li.parentNode.removeChild(li)
    }else{
        console.log("nie ma takiego id")
    }
}
addBtn.addEventListener('click',evt=>{
    evt.preventDefault()
    const marka=document.querySelector(`#marka`).value
    const model=document.querySelector(`#model`).value
    const kolor=document.querySelector(`#kolor`).value
    const rokProdukcji=document.querySelector(`#rokProdukcji`).value
    const przebieg=document.querySelector(`#przebieg`).value
    id=crypto.randomUUID()
    while( Arr.some(obj=>
        obj.id==id
    )){
        id=crypto.randomUUID()
    }
    const samochod={
        id: id,
        marka: marka,
        model: model,
        rokProdukcji: rokProdukcji,
        kolor: kolor,
        przebieg: przebieg
    };
    console.log(samochod)
    Arr.push(samochod)
    const buttonele=document.createElement(`button`)
    buttonele.innerText="usuń"
    buttonele.className="delBtn"
    buttonele.addEventListener(`click`,(but)=>deleteElement(samochod.id,Arr,but))
    const li=document.createElement(`li`)
    li.innerHTML=`<div>
    <h3>${samochod.marka}</h3>
    <p>model: ${samochod.model}, kolor: ${samochod.kolor
    }, rok produkcji: ${samochod.rokProdukcji}, przebieg: ${samochod.przebieg}</p></div>`
    li.append(buttonele)
displayList.innerHTML='';
displayList.append(li)
}) 

displayBtn.addEventListener(`click`,e=>{
    e.preventDefault()
    Arr.forEach((obj)=>{
        const buttonele=document.createElement(`button`)
    buttonele.innerText="usuń"
    buttonele.className="delBtn"
    buttonele.addEventListener(`click`,(but)=>deleteElement(obj.id,Arr,but))
    const li=document.createElement(`li`)
    li.innerHTML=`<div>
    <h3>${obj.marka}</h3>
    <p>model: ${obj.model}, kolor: ${obj.kolor
    }, rok produkcji: ${obj.rokProdukcji}, przebieg: ${obj.przebieg}</p></div>`
    li.append(buttonele)
displayList.append(li)
    })
        
    
})


