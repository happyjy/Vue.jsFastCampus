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

function addItem(e){
  e.preventDefault(); //won't refresh browser

  const text = (this.querySelector('[name=item]')).value;
  console.log("### name = item value : " + this.querySelector('[name=item').value);
  
  const item = { text };
  items.push(item);

  addItemAtList(items, addItems);
}


addItems.addEventListener('submit', addItem);
