import './Calculator.css';

function Calc() {
  function screen(num) {
    var screen = document.getElementById('screen');
    screen.value += num;
  }

  function clearScreen() {
    var screen = document.getElementById('screen');  // Fixed typo
    screen.value = '';
  }

  function clear() {
    var screen = document.getElementById('screen');  // Fixed typo
    screen.value = screen.value.substring(0, screen.value.length - 1); // Use substring to remove last character
  }

  function calculate() {
    var screen = document.getElementById('screen');  // Fixed typo
    try {
      screen.value = eval(screen.value);  // Calculate the expression
    } catch (e) {
      screen.value = 'Error';  // Display error for invalid expressions
    }
  }

  return (
    <div className='main'>
      <div className='calculator-box'>
        <input type='text' className='text-screen' placeholder='0' id='screen'></input>  {/* Correct id */}
        <div className='row'>
          <input type='button' className='btn' value='AC' id='action-btn' onClick={() => clearScreen()}></input>
          <input type='button' className='btn' value='%' id='action-btn' onClick={() => screen('%')}></input>
          <input type='button' className='btn' value='C' id='action-btn' onClick={() => clear()}></input>
          <input type='button' className='btn' value='/' id='action-btn' onClick={() => screen('/')}></input>
        </div>

        <div className='row'>
          <input type='button' className='btn' value='7' onClick={() => screen('7')}></input>
          <input type='button' className='btn' value='8' onClick={() => screen('8')}></input>
          <input type='button' className='btn' value='9' onClick={() => screen('9')}></input>
          <input type='button' className='btn' value='*' id='action-btn' onClick={() => screen('*')}></input>
        </div>

        <div className='row'>
          <input type='button' className='btn' value='4' onClick={() => screen('4')}></input>
          <input type='button' className='btn' value='5' onClick={() => screen('5')}></input>
          <input type='button' className='btn' value='6' onClick={() => screen('6')}></input>
          <input type='button' className='btn' value='-' id='action-btn' onClick={() => screen('-')}></input>
        </div>

        <div className='row'>
          <input type='button' className='btn' value='1' onClick={() => screen('1')}></input>
          <input type='button' className='btn' value='2' onClick={() => screen('2')}></input>
          <input type='button' className='btn' value='3' onClick={() => screen('3')}></input>
          <input type='button' className='btn' value='+' id='action-btn' onClick={() => screen('+')}></input>
        </div>

        <div className='row'>
          <input type='button' className='btn' value='00' onClick={() => screen('00')}></input>
          <input type='button' className='btn' value='0' onClick={() => screen('0')}></input>
          <input type='button' className='btn' value='.' onClick={() => screen('.')}></input>
          <input type='button' className='btn' value='=' id='action-btn' onClick={() => calculate()}></input>
        </div>
      </div>
    </div>
  );
}

export default Calc;
