const addform = document.querySelector('.add');
const list = document.querySelector('.todos')
const search =document.querySelector('.search input');

const para = document.querySelector('h5');
setInterval(function(){
  
    const now = new Date();
     console.log(now);
     para.innerText = now;
    }, 1000);


const generatetemplate =(e) => {
const addli = `
<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${e}</span>
    <i class="far fa-trash-alt delete"></i>
</li>
`;

list.innerHTML += addli;

};



addform.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = addform.add.value.trim();

    if(todo.length)
    {
        generatetemplate(todo);
        addform.reset();
    };
   
    
    });

//delete todos

list.addEventListener('click', e =>{

if(e.target.classList.contains('delete'))
{
 e.target.parentElement.remove();
};
});


//search todo

const filtertodos =(t)=>{

const newlist = Array.from(list.children);

 const wlist = newlist.filter(e=>{
return !e.textContent.includes(t);
 });

    wlist.forEach(e=>{
     e.classList.add('filtered');
    });

    const xlist = newlist.filter(e=>{
        return e.textContent.includes(t);
         });

         xlist.forEach(e=>{
            e.classList.remove('filtered');
           });

};
search.addEventListener('keyup',e=>{
const term =search.value.trim();

filtertodos(term);
});