let SHOOP = document.querySelectorAll('.asd');

let prod=[
{name:'Mshashko'     , price:270, quantity:'900 ml' , inSHOOP:0 , tag:'b1'   } ,
{name:'roshan'       , price:270, quantity:'900 ml' , inSHOOP:0 , tag:'b2'   } ,
{name:'lintex'       , price:270, quantity:'900 ml' , inSHOOP:0 , tag:'b3'   } ,
{name:'chamois'      , price:270, quantity:'900 ml' , inSHOOP:0 , tag:'b4'   } ,
{name:'Nofal Charm'  , price:270, quantity:'900 ml' , inSHOOP:0 , tag:'b5'   } ,
{name:'Floring'      , price:270, quantity:'900 ml' , inSHOOP:0 , tag:'b6'   } ,
{name:'pink'         , price:270, quantity:'900 ml' , inSHOOP:0 , tag:'b7'   } 
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
	<img src="${Item.tag}.jpeg"></div>
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