(function(){ 
  'use strict';

  var tabDiv = document.getElementById('stdevtab');

  var txt = '';

  txt += '<table><thead>';
  txt += '<tr><th>Response</th><th>Set 1</th><th>Set 2</th></tr>';

  txt += '</thead><tbody>';
  txt += '<tr><td>Strongly Agree</td><td>1</td><td>6</td></tr>';
  txt += '<tr><td>Agree</td><td>3</td><td>1</td></tr>';
  txt += '<tr><td>Neither Agree nor Disagree</td><td>7</td><td>1</td></tr>';
  txt += '<tr><td>Disagree</td><td>3</td><td>1</td></tr>';
  txt += '<tr><td>Strongly Disagree</td><td>1</td><td>6</td></tr>';
  txt += '</tbody></table>';
  
  tabDiv.innerHTML = txt;

  var sumDiv = document.getElementById('oneQSummary');

  var sumTxt = '';

  sumTxt += '<table><thead>';
  sumTxt += '<tr><th></th><th>Set 1</th><th>Set 2</th></tr>';

  sumTxt += '</thead><tbody>';
  sumTxt += '<tr><th>Median</th><td>3</td><td>3</td></tr>';
  sumTxt += '<tr><th>Mean</td><td>3</th><td>3</td></tr>';
  sumTxt += '<tr><th>Standard Deviation</th><td>1.0</td><td>1.9</td></tr>';
  sumTxt += '</tbody></table>';
  
  sumDiv.innerHTML = sumTxt;


  var prePostTab = document.getElementById('preposttab');

  var preposttabtxt = '';

  preposttabtxt += '<table><thead>';
  preposttabtxt += '<tr><th></th><th>Pre</th><th>Post</th></tr>';

  preposttabtxt += '</thead><tbody>';
  preposttabtxt += '<tr><th>Q1</th><td>2.9 &#177; 1.02</td><td>4.6 &#177; 0.81</td></tr>';
  preposttabtxt += '<tr><th>Q2</td><td>3.1 &#177; 1.15</th><td>3.1 &#177; 1.06</td></tr>';
  preposttabtxt += '</tbody></table>';
  
  prePostTab.innerHTML = preposttabtxt;

  var prePostTab2 = document.getElementById('preposttab2');

  var preposttabtxt2 = '';

  preposttabtxt2 += '<table><thead>';
  preposttabtxt2 += '<tr><th></th><th>Pre</th><th>Post</th></tr>';

  preposttabtxt2 += '</thead><tbody>';
  preposttabtxt2 += '<tr><th>Q1</th><td>2.9 &#177; 1.02</td><td style="color: #a3e971">4.6 &#177; 0.81</td></tr>';
  preposttabtxt2 += '<tr><th>Q2</td><td>3.1 &#177; 1.15</th><td style="color: #ed7494">3.1 &#177; 1.06</td></tr>';
  preposttabtxt2 += '</tbody></table>';
  
  prePostTab2.innerHTML = preposttabtxt2;

  var changeTab = document.getElementById('changetab');

  var changeTabTxt = '';

  changeTabTxt += '<table><thead>';
  changeTabTxt += '<tr><th></th><th>Pre</th><th>Post</th></tr>';

  changeTabTxt += '</thead><tbody>';
  changeTabTxt += '<tr><th>Change</th><td>2.9 &#177; 1.02</td><td> 4.6 &#177; 0.81</td></tr>';
  changeTabTxt += '<tr><th>No Change</th><td>3.1 &#177; 1.15</td><td> 3.1 &#177; 1.06</td></tr>';
  changeTabTxt += '<tr><th>Churn</th><td>3.6 &#177; 1.41</td><td> 3.8 &#177; 1.29</td></tr>';
  changeTabTxt += '</tbody></table>';
  
  changeTab.innerHTML = changeTabTxt;

    

}());
