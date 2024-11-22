const ExpenseDate = (props) => {
    //javascriptis css esile kutsuimiseks pane className mitte lihtsalt class
    //returni sulgudesse alguse ja lõpu märgend, aalati fikseeri sulgudega
    //siin võta ära vahelt data, sest sa panid uue nime sellele
const day = props.date.toLocaleString('et-EE', {day: '2-digit'})
const month = props.date.toLocaleString('et-EE', {month: 'long'})
const year = props.date.getFullYear()

return(
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
)
}
export default ExpenseDate
