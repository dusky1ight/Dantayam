let pRecord = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addRecord = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
        let patientRecord = {
                id: Date.now(),
                Patient: document.getElementById('name').value,
                age: document.getElementById('age').value,
                dignostics: document.getElementById('ilaaj').value,
                Amount: document.getElementById('kharcha').value
            
            }
                   
            pRecord.push(patientRecord);
            // console.log(patientRecord.Patient);
            // console.log(patientRecord.age);
            // console.log(patientRecord.dignostics);

            var today = new Date();

            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()


            var table = document.getElementById("myTable");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = patientRecord.Patient;
            cell2.innerHTML = patientRecord.Amount;

            document.getElementById("demo").innerHTML =
                  date + "  " + patientRecord.Patient + "  " + patientRecord.dignostics + "  " + patientRecord.Amount;

            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {pRecord} );
            
            let pre = document.querySelector('#msg pre');
            
           // pre.textContent = '\n' + JSON.stringify(pRecord, '\t',10);
            

            let myobj = JSON.stringify(pRecord);
            // const obito = JSON.parse(pRecord);
            console.log(myobj);
            // console.log(obito.Patient);
            
            //saving to localStorage
           localStorage.setItem('Precord',myobj);
//            localStorage.setItem('MyMovieList', JSON.stringify(pRecord) );
            
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addRecord);
        });