const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const cisor = document.getElementById("cisor")
const checkResult = document.getElementById("result")
const scorePrint = document.getElementById("scoreIs")

let Ai = ""

let scoreBoard = {
    win:0,
    losses:0,
    tie:0
}; 

let winner = ""

rock.addEventListener("click", ()=>{
    aiPlays()
    console.log(`You clicked Rock, Ai clicked ${Ai}` )

    if(Ai === "Rock") {
        winner = "Tie" 
    }if (Ai === "Paper"){
        winner = "Ai win"
    }if (Ai === "Cisor"){
        winner = "You win"
    }
    UpdateScoreBoard()
    checkResult.innerHTML = `Result: <b>${winner}</b> (Ai choose ${Ai})`
})

paper.addEventListener("click", ()=>{
    aiPlays()
    console.log(`You clicked Paper, Ai clicked ${Ai}` )

    if(Ai === "Rock") {
        winner = "You win" 
    }if (Ai === "Paper"){
        winner = "Tie"
    }if (Ai === "Cisor"){
        winner = "Ai win"
    }
    UpdateScoreBoard()
    checkResult.innerHTML = `Result: <b>${winner}</b> (Ai choose ${Ai})`
})

cisor.addEventListener("click", ()=>{
    aiPlays()
    console.log(`You clicked Cisor, Ai clicked ${Ai}` )

    if(Ai === "Rock") {
        winner = "Ai win" 
    }if (Ai === "Paper"){
        winner = "You win"
    }if (Ai === "Cisor"){
        winner = "Tie"
    }
    UpdateScoreBoard()
    checkResult.innerHTML = `Result: <b>${winner}</b> (Ai choose ${Ai})`
})

// Ai plays function
const aiPlays =()=> {
    const num = Math.floor(Math.random() * 3) + 1;
    console.log(num)
    if(num === 1) {
        Ai = "Rock"
    } if(num === 2) {
        Ai = "Paper"
    } if (num === 3) {
        Ai = "Cisor"
    }
}

//Update score board function
const UpdateScoreBoard =() =>{
    if(winner === "Tie") {
        scoreBoard.tie+=1
    }if (winner === "Ai win"){
        scoreBoard.losses+=1
    }if (winner === "You win"){
        scoreBoard.win+=1
    }
console.log(scoreBoard)

scorePrint.innerHTML = `Winner: <b>${scoreBoard.win}</b> Tie: <b>${scoreBoard.tie}</b>  Losses: <b>${scoreBoard.losses}</b>`
}

//show score on page 
scorePrint.innerHTML = `Winner: <b>${scoreBoard.win}</b> Tie: <b>${scoreBoard.tie}</b>  Losses: <b>${scoreBoard.losses}</b>`

