var app = new Vue({
  el: '#app',
  data: {
    message : 'To Do list',
    uid: '10',
    flag: true
  },
  methods: {
    clickBtn() {
      // 입력 후 엔터 하면 li로 추가
      console.log("hi");
    }
  }
});



const items = JSON.parse(localStorage.getItem('items')) || [];
const addItems = document.querySelector('.add-items');
const toDoList = document.querySelector('.toDoList');

function addItem(e){
  e.preventDefault(); //won't refresh browser

  const text = (this.querySelector('[name=item]')).value;
  const item = { text };
  console.log("### name = item value : " + this.querySelector('[name=item').value);

  items.push(item);
  // addItemAtList(items || [], addItems);
  localStorage.setItem('toDoList', JSON.stringify(items));
  // toDoList.innerHTML = `<li> dd </li>`;  
  toDoList.innerHTML = items.map((item, i)=>{
    return ` <li>
      <label>${item.text}</label>
    </li>
    `
  }).join('');
  this.reset;// this : document.querySelector('.add-items');
}

// function addItemAtList(items, toDoList){
//   toDoList.innerHTML = items.
// }


addItems.addEventListener('submit', addItem);
