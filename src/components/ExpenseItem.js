//funkstioon nimeta sama nimega, mis fail selle sisu määramiseks
import './ExpenseItem.css' //impordi css faili expenseitem kujuduse jaoks
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {

    //javascriptis css esile kutsuimiseks pane className mitte lihtsalt class
    //returni sulgudesse alguse ja lõpu märgend, aalati fikseeri sulgudega

//muutujad ja arvutused enne returni, return juba lükkab andmed faili ja annab tulemusi
//kasuta loogilisi sulge, et võtaks muutujat
//props aka propery-atribuut, komponendi atribuut
//propsi esile kutsumiseks on vajalik props
    return (
    <div className='expense-item'> 
        <ExpenseDate date={props.data.date}/>
        <div className='expense-item__description'>
            <h2>{props.data.title}</h2>
            <div className='expense-item__price'>{props.data.price}</div>
        </div>
    </div>
)
}
export default ExpenseItem