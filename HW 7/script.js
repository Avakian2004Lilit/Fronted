
// Задача № 1
/*const button = document.createElement("button");
document.body.append(button);
for (let i = 0; i <= 1; i++) {
    let p = document.createElement("p");
    p.innerText = i;
    button.append(p);
    p.onclick = () => {
        if (p.classList[0] === "elem") {
            p.classList.remove("elem");
            
        }else{
            p.classList.add("elem");
        }

    };


    }*/
    // Задача № 2
    /*const flowers = [
        {
            title: "роза",
            colour: "red",

        },

        {
            title: "фиалка",
            colour: "purple",

        },

        {
            title: "ландышь",
            colour: "white",


        },

    ];
    for (let i = 0; i < flowers.length; i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid yellow";
        div.style.width = "100px";
        div.style.height = "100px";
        document.body.append(div);
        div.innerText = flowers[i].colour;

        div.onmouseover = () => {
            div.style.backgroundColor = "red";
        };
        div. onmouseout = () => {
            div.style.backgroundColor = "blue";
        };
        
    }

   
        // Задача № 3
    /*const movie = [
        {
            title: "the walking Dead",
            description: "horror",

        },
        {
            title: "chaos",
            description: "drama",

        },
        {
            title: "paper house",
            description: "thriller",

        },

        {
            title: "emma",
            description: "comedy",

        },
    ];
    for (let i = 0; i < movie.length; i++) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = movie[i].title;
        div.append(p);
        document.body.append(div);
        div.onclick = () => {
            if (p.textContent === movie[i].title) {
                p.innerText = movie[i].description;
                
            }else{
                p.innerText = movie[i].title;
            }

        }



       
        
    }*/

   

   // Задача № 4

   for (let i = 0; i <= 26; i++) {
    let button = document.createElement("button");
    button.style.border = "1px solid black";
    button.style.width = "100px";
    button.style.height = "100px"
    button.style.display = "inline-block";
    button.innerText = i;
    document.body.append(button);

    button.onmouseover = () => {
        button.style.backgroundColor = "red";
    };
    button.onmouseout = () => {
        button.style.backgroundColor = "white";

    };
    
    
   }
    //дальше не знаю как. У меня на кнопках цифры как поменять на буквы не знаю