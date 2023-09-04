let tab=document.createElement("table")
document.body.appendChild(tab)
let tr=document.createElement('tr')
tab.appendChild(tr)
let td1=document.createElement('td')
let td2=document.createElement('td')
tr.appendChild(td1)
tr.appendChild(td2)
let tr1=document.createElement('tr')
tab.appendChild(tr1)
let td3=document.createElement('td')
let td4=document.createElement('td')
tr1.appendChild(td3)
tr1.appendChild(td4)
tab.style.border='2px solid black'
tab.style.borderCollapse='collapse'
td1.style.border="2px solid black";
td2.style.border="2px solid black";
td3.style.border="2px solid black";
td4.style.border="2px solid black";
td1.innerText='vishal'
td2.innerText='shawn'
td3.innerText='Atul'
td4.innerText='Rahul'


let div2=document.createElement('div')
document.body.appendChild(div2)
div2.innerHTML=`  <form action="">
<fieldset>
<legend>Student Form</legend>
<table>
<tr>
<td>
 <label for="un">UN :</label>
</td>
<td>
<input type="text" name="un" id="un">
</td>
</tr>
<tr>
    <td><label for="pwd">Pwd :</label></td>
    <td><input type="password" name="pwd" id="pwd"></td>
</tr>
<tr>
<td><label for="email"> E-mail :</label></td>
<td><input type="email" name="email" id="email"></td>
</tr> 
    </table>
    </fieldset>
  </form>`