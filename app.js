const URL = "https://catfact.ninja/facts";
let datas;
let btn = document.createElement("button");
let para = document.createElement("p");
let container = document.createElement("div"); 
btn.innerText = "Get a Cat Fact 🐱";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.flexDirection = "column";
document.body.style.backgroundColor = "#f0f0f0"; // Light background

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.gap = "15px"; // Space between elements

btn.style.backgroundColor = "#ff9800";
btn.style.color = "white";
btn.style.fontSize = "18px";
btn.style.padding = "10px 20px";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.cursor = "pointer";
btn.style.transition = "background 0.3s ease";
btn.style.boxShadow = "2px 4px 6px rgba(0, 0, 0, 0.2)";

btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#e68900";
});
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#ff9800";
});

para.style.fontSize = "22px";
para.style.fontWeight = "bold";
para.style.color = "#333";
para.style.backgroundColor = "#f9f9f9";
para.style.padding = "15px";
para.style.borderRadius = "10px";
para.style.textAlign = "center";
para.style.maxWidth = "500px";
para.style.boxShadow = "3px 5px 8px rgba(0, 0, 0, 0.15)";

container.appendChild(para);
container.appendChild(btn);
document.body.appendChild(container);

const getFacts = async () => {
    try {
        let response = await fetch(URL);
        datas = await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

let i = 0;
btn.addEventListener("click", () => {
    if (datas && datas.data.length > 0) {
        para.innerText = datas.data[i].fact;
        i = (i + 1) % datas.data.length; // Loop back when all facts are shown
    } else {
        para.innerText = "No facts available.";
    }
});

getFacts();


//using promise-chaining
//it does the same as (async and await do)

function Getfacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    }).then(datas=>{
        datas.data.forEach(element => {
            console.log(element);
        });
    })
}
Getfacts();
