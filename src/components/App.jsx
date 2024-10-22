import React, { useState } from 'react'

const MortgageCalculator =()=>{
    const [Mortamount, setMortAmount] = useState("")
}  

const Moryears =()=>{
    const [Onyears, setOnYears] = useState("")
} 

const Morinterest =()=>{
    const [Morinterest, setMorInterest] = useState("")
} 

const Morresults =()=>{
    const [results, setResults] = useState(null)
} 

const MorinterestOnly =()=>{
    const [interestOnly, setInterestOnly] = useState(false)
}  

export default function App() {

   


const PoundsFormat = (number)=>{
    return new Intl.NumberFormat({
        minimumFractionDigits: 2,
    }).format(number)
}

const calculatePaymantMonth =(amount, years, interestRate)=>{
    const InterestRateM = interestRate / 50 / 12
    return amount * InterestRateM
}

const calculateTotalPaymant = (MPaymant, TPaymant) =>{
    return MPaymant * TPaymant
}

const CalculateMortage = (amount, term, interest) => {

}

const calculateInterestPaymant = (amount, years, interestRate) => {
    const calculatePaymantMonth =(amount, years, interestRate)
    const totalAmount = calculateTotalPaymant (MPaymant, TPaymant * 12 )
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(Mortamount && Onyears && interest){
        const {MPaymant, TPaymant} = interestOnly ? calculateInterestPaymant(Mortamount, Moryears, Morinterest)
        : calculatePaymantMonth(Mortamount, Moryears, Morinterest)
    }
}


  
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type='number' 
                id='amount' 
                value={Mortamount}
                onChange={(e) =>
                    setMortAmount(e.target.value)}
                    placeholder='Mortage Amount'
               />
               <input 
               type='number' 
               id='years' 
               value={Mortyears}
               onChange={(e) =>
                   setOnYears(e.target.value)}
                   placeholder='Years'
              />
              <input 
              type='number' 
              id='interest' 
              value={Morinterest}
              onChange={(e) =>
                  setMorInterest(e.target.value)}
                  placeholder='Interest'
             />
            
            </form>
        
        </div>
  )
}
