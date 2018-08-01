
// pure js
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const addItems = document.querySelector('.add-items');
  const toDoList = document.querySelector('.toDoList');

  function addItem(e){
    e.preventDefault(); //won't refresh browser

    const text = (this.querySelector('[name=item]')).value;
    const item = { 
      text,
      done: false
    };
    console.log("### name = item value : " + this.querySelector('[name=item').value);
    items.push(item);
    addLiEle(items, toDoList);
    localStorage.setItem('toDoList', JSON.stringify(items));
    this.reset;// this : document.querySelector('.add-items');
  }

  function addLiEle(items = [], toDoList){
    // toDoList.innerHTML = `<li> dd </li>`;  
    toDoList.innerHTML = items.map((item, i)=>{
      // <label>${item.text}</label>
      return ` <li>
        <input type="checkbox" data-index=${i} 
        id="item${i}"
        ${item.done ? 'checked' : ''}/>
        <label for="item${i}"> ${item.text} </label>
      </li>
      `
    }).join('');
  }

  function toggleDone(e){
    console.log(e.target);
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    addLiEle(items, toDoList);
  }


  addItems.addEventListener('submit', addItem);
  toDoList.addEventListener('click', toggleDone);
