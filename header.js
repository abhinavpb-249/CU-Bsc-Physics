

let appHeader = `    
    <h1>Bsc Physics Calicut University </h1>
	<h3>Study materials </h3>
	
	<nav>
            <ul>
                <li> <div  id ="index" onclick='goto(this.id)'>     Home</div></li>
                <li> <div id="Textbooks" onclick='goto(this.id)'>   Books</div></li>                
                <li> <div id="experiments" onclick='goto(this.id)'> Experiments</div></li>
                <li> <div id="classes" onclick='goto(this.id)'>     Classes</div></li>
                <li> <div id="about" onclick='goto(this.id)'>       About </div></li>
            </ul>
        </nav>
`;

document.getElementById("app-header").innerHTML = appHeader;


window.onload=function Highlight(){
//get the name of the current page
var path = window.location.pathname;
var page = path.split("/").pop();
var name = page.split(".")[0];
console.log( name );
//get the button with that name
var Button = document.getElementById(name);
//change that color of the button
Button.style.backgroundColor="lightgrey";
}


 function goto(buttonID){
        file_name =buttonID+".html"	
	window.open(file_name,"_self")
}

