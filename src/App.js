import './App.css';
import ExpenseItem from './components/ExpenseItem.js';


function App() {

//const date =new Date(2024,11,12)
//const title = 'New book'
//const price = 30.99
// aga ei pea nii pikalt, tee neist üks objekt:data ja siis muuda returnis ka õigeks ja saadab korraga
//data on nüüd objekt, kasuta loogilisi sulge, sp komad, et on nimi ja väärtus
//mitme objekti ja expense tegemiseks pane anmed massiivi, massivis eraldad komadega
const expenses = [
  {
  date:new Date(2024,11,12),
  title: 'New book',
  price: 30.99,
},
{
  date:new Date(2024,11,12),
  title: 'Bag',
  price: 130.99,
},
{
  date:new Date(2024,11,12),
  title: 'Shoes',
  price: 230.99,
}
]
//siin on su määratud propsid date, title, price
  return (
    <div className="App">
      <ExpenseItem
        data={expenses[0]}
          />
            <ExpenseItem
              data={expenses[1]}
              />
            <ExpenseItem
              data={expenses[2]}
              />

    </div>
  );
}

export default App;
