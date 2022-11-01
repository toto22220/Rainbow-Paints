let SHOOP = document.querySelectorAll('.abb');

let prod=[
{name:'fiction'       , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x19'   } ,
{name:'Glostics'      , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x1'    } ,
{name:'3D Beach'      , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x15'    } ,
{name:'Maxem'         , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x9'    } ,
{name:'Rest'          , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x4'   } ,
{name:'Rack Finch'    , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x14'   } ,
{name:'Rustic'        , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x13'   } ,
{name:'Light'         , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x18'    } ,
{name:'Curium'        , price:300, quantity:'900 ml' , inSHOOP:0 , tag:'x16'   } 

];

for (let i=0;i<SHOOP.length;i++){
	SHOOP[i].addEventListener('click',()=>{
    cartNum(prod[i]);
    totalcost(prod[i])	;
})
}


function cartNum(prod){
let prNnm=localStorage.getItem('cartNum');
    prNnm =parseInt(prNnm);

 if(prNnm ){
 localStorage.setItem('cartNum',prNnm +1);
 }else{
 localStorage.setItem('cartNum',1);
}
setItem(prod);
}



function setItem (prod){
	let SHOOPItem=localStorage.getItem('prodInSHOOP');
	SHOOPItem=JSON.parse(SHOOPItem);
	
	if(SHOOPItem != null){
			if(SHOOPItem[prod.tag] == undefined){
        SHOOPItem = {...SHOOPItem,[prod.tag]:prod	}			
		}
		SHOOPItem[prod.tag].inSHOOP +=1;	
	}else{
	prod.inSHOOP=1;	
	SHOOPItem={
		[prod.tag]:prod
		}	
	}
	
    localStorage.setItem("prodInSHOOP",JSON.stringify(SHOOPItem));
}
function totalcost(prod){
	let SHOOPCoet=localStorage.getItem('totalcost');
	if(SHOOPCoet != null){
     SHOOPCoet =parseInt(SHOOPCoet);
     localStorage.setItem("totalcost",SHOOPCoet+ prod.price );
	}else{
    localStorage.setItem("totalcost",prod.price);
	}
}
function displaySHOOP(){
	let SHOOPItem=localStorage.getItem("prodInSHOOP");
	SHOOPItem=JSON.parse(SHOOPItem);
	let productsContainer=document.querySelector(".products");
	let SHOOPCoet=localStorage.getItem('totalcost');
   if(SHOOPItem && productsContainer){
	productsContainer.innerHTML= '';
	Object.values(SHOOPItem).map(Item =>{
	productsContainer.innerHTML	+= `
	<div class="products" >
	<img src="${Item.tag}.jpeg">
	</div>
	<div class="products-title" >
	<span>${Item.name}</span>
	<span class="pri">${Item.price}</span>
	<span class="io">${Item.inSHOOP}</span>
	<span class="oo"> ريال${Item.inSHOOP * Item.price},00</span>
	
	</div>
	`
	});
	productsContainer.innerHTML	+= `
	<div class="allTotal" >
	<h4 class="allTotalTitle"> Basket Total </h4>
	<h4 class="allTotal">ريال${SHOOPCoet}</h4>
	`
}
   }

displaySHOOP();
//console.log	("run")