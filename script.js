import * as d3 from "https://cdn.skypack.dev/d3@7";





// targeting the svg itself
const svg = document.getElementById("svs");

// variable for the namespace 
const svgns = "http://www.w3.org/2000/svg";

let newRect = document.createElementNS(svgns, "rect");
// make a simple rectangle
 
let a = 60;
newRect.setAttribute("x", "150");
newRect.setAttribute("y", "150");
newRect.setAttribute("width", "100");
newRect.setAttribute("height", "100");
newRect.setAttribute("fill", "#5cceee");

// append the new rectangle to the svg
svg.appendChild(newRect);







const  boto = document.getElementById("hola");



boto.addEventListener("click", ()=>{
  newRect.setAttribute("y", a);
  a += 60;
  newRect.setAttribute("height", a-25);
        boto.innerText= "oh no";
    
});




 





/* */
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
 

    d3.select("ul")
     // .data(dataset)
     // .enter()
      .append("li")
      // .attr("class", "bar")
      .text("hola");
      //.attr("class", "bar").style("height", d => `${d*5}px`);
      // Add your code below this line

