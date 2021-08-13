function mufunction(){
	document.getElementById('billtoname').innerHTML=document.getElementById('nametobill').value;
	document.getElementById('adte').innerHTML=Date();
	document.getElementById('apyment').innerHTML=document.getElementById('given-apy').value;
	var a=document.getElementById('address-liv').value;

	if(a=="Ontario"){
		document.getElementById('ontariocust').innerHTML="For ontario customers, handling and shipping is free!";
	}


	var b=document.getElementById('or-qty').value;
	document.getElementById('result-1').innerHTML=b;
	document.getElementById('result-2').innerHTML=b;
	var c=document.getElementById('mrp-result-1').innerHTML=b*10;
	var d=document.getElementById('mrp-result-2').innerHTML=b*5;
	var e=document.getElementById('result-1-gst').innerHTML=c*1/10;
	var f=document.getElementById('result-2-gst').innerHTML=d*1/10;
	var g=document.getElementById('fresult-1').innerHTML=parseInt(c)+parseInt(e);
	var h=document.getElementById('fresult-2').innerHTML=parseInt(d)+parseInt(f);
	var i=b*1.5;
	var s=parseInt(g)+parseInt(h)+parseInt(i);
	if(a=="Ontario"){
		document.getElementById('super-total').innerHTML=g;
		}
	else{
		document.getElementById('super-total').innerHTML=parseInt(g)+parseInt(h)+parseInt(i)+" dollars";
	}
	var num;
		if(s<10){
			ONE:
		switch(s){
			case 0:
			num="Zero";
			break;

			case 1:
			num="One";
			break;

			case 2:
			num="Two";
			break;

			case 3:
			num="Three";
			break;

			case 4:
			num="Four";
			break;

			case 5:
			num="Five";
			break;

			case 6:
			num="Six";
			break;

			case 7:
			num="Seven";
			break;

			case 8:
			num="Eight";
			break;

			case 9:
			num="Nine";
			break;
		}
		else if (s>100) {
			var y=s/10;
			var z=s%10;
		}



}

	document.getElementById('Wordamt').innerHTML=num+" dollars only";	
}
