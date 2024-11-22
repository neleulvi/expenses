//funkstioon nimeta sama nimega, mis fail selle sisu määramiseks
import './ExpenseItem.css' //impordi css faili expenseitem kujuduse jaoks

const ExpenseItem = () => {
    //javascriptis css esile kutsuimiseks pane className mitte lihtsalt class
    //returni sulgudesse alguse ja lõpu märgend, aalati fikseeri sulgudega
return (
    <div className='expense-item'> 
        <div>Date</div>
        <div className='expense-item__description'>
            <h2>Title</h2>
            <div className='expense-item__price'>Price</div>
        </div>
    </div>
)
}
export default ExpenseItem