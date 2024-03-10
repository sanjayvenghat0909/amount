
const api = "https://api.exchangerate-api.com/v4/latest/USD"; 
let select_one=document.querySelector(".from");
let select_two=document.getElementById("sel2");
let clone_one=document.querySelector(".from");
let input_box=document.getElementById("oamount")
let change_one=select_one.value
var cur_one
var val_2
var new_new
var count=0;
var finalValue = document.querySelector(".finalValue");
final_amount=document.getElementById("finalAmount")
	
async function api_caller()
{  
	let get_value=await fetch(api);
	let json_val=await get_value.json();
	try 
	{   
		if(!json_val)
		{
			throw(err)
		}    
		else 
		{
	    for(let key_value in json_val['rates'])
		  {
			let option=document.createElement("option")
			option.innerHTML=key_value;
			select_one.appendChild(option)
			let option_two=document.createElement("option")
			option_two.innerHTML=key_value;
			select_two.appendChild(option_two)
		  }   
		  promise_api(select_one,select_two)
		} 
}
 catch(val_val)
  {
         alert("error occoured")
  } 

}  
function promise_api(one_box, two_box) {
    let api = "https://api.exchangerate-api.com/v4/latest/USD";
    return new Promise((resolve, reject) => {
        fetch(`${api}`)
            .then((val) => val.json())
            .then((new_val) => {
                let new_values = new_val['rates'];
                let form = one_box.value;
                let to = two_box.value;
                let amt = parseFloat(input_box.value);
				if(isNaN(amt))
				{
					amt=1
				}
                let exchange = new_values[form];
                let result=(amt/new_values[form])*new_values[to]
				finalValue.textContent=result
				final_amount.style.display="block"
            })
            .catch((err) => console.log("Error:", err));
    });
}

api_caller()
document.querySelector(".btn-primary").addEventListener("click",api_caller)
function clearVal() {
	window.location.reload();
	final_amount.innerHTML = "";
};
//const result = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];*/