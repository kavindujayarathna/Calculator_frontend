function appendToResult(value) {
  const result = document.getElementById('result');
  result.value += value;
}

async function calculate() {
  const result = document.getElementById('result');
  const { value } = result;
  
  try {
    const apiUrl = 'http://15.206.158.31:8080/calculate';  

    const requestBody = {
      value,
    };    

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Extract the 'answer' parameter from the JSON response
    const { answer } = data.data;

    result.value = answer
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  const result = document.getElementById('result');
  result.value = '';
}

function testCalculate(expression) {
  try {
    const answer = eval(expression);
    return answer;
  } catch (error) {
    return 'Error';
  }
}
module.exports = testCalculate; 