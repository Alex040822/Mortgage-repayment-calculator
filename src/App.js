import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='principal'>
        <div className='firtsSec'>
          <h1>Mortgage Calculator</h1>
          <button className='btn-clear'>Clear All </button>
        </div>

        <form className='form'> 
          <label for='amount' className='label-amount'> Mortgage Amount </label>
          <div className='secodSec'>
            <span className='symbol'>€</span>
            <input type='number' id='amount' className='input-amount' required/>
          </div>

          <div className='col-two'>
            <div className='form-c'>
              <div className='inputs-groups'>
                <label for='years' className='years-label'>Introduce years</label>
                <span className='symbol-years'>Years</span>
                <input type='number' id='years' className='input-years' required/>
              </div>


              <div className='form-c'>
                <label for='interest' className='interest-label'>Introduce interest rate</label>
                <span className='symbol-interest'>%</span>
                <input type='number' id='interest' className='input-interest' step='0.01' required/>
              </div>
          
          <fieldset className='mortgage-type'>
            <label className='fiel-title-label'>Morgage Type</label>
            <div className='type-group'>
              <input required type='radio' name='type' id='repayment' value='repayment' />
              <label for='repayment' className='repayment-label'>Repayment</label>
            </div>

            <div>
            <div className='type-group'>
            <input type='radio' name='type' id='interest' value='interest' required/>
            <label for='interest' className='interest-label'>Interest Only</label>
          </div>
            </div>
          </fieldset>

          <button className='btn-calculator' type='submit'>
            Calculate Repayments
          </button>
            </div>
          </div>

        </form>
      
      </div>

    </div>
  );
}

export default App;
