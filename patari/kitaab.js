let pRecord = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
        let patientRecord = {
                id: Date.now(),
                Patient: document.getElementById('name').value,
                age: document.getElementById('age').value,
                dignostics: document.getElementById('ilaaj').value,
                Amount: document.getElementById('kharcha').value
            }
            pRecord.push(patientRecord);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {pRecord} );
            let pre = document.querySelector('#msg pre');
            
            pre.textContent = '\n' + JSON.stringify(pRecord, '\t',10);

            //saving to localStorage
            localStorage.setItem('aj ka record',JSON.stringify(pRecord));
//            localStorage.setItem('MyMovieList', JSON.stringify(pRecord) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addMovie);
        });