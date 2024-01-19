let boxes=document.querySelectorAll(".box");
let message=document.querySelector(".message");
let msg=document.querySelector(".msg");
let restart=document.querySelector(".resrt");
let newgame=document.querySelector(".ngame");
let turn="O";
let count=0;
let WinningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reset = () =>{
    turn="O";
    count=0;
    enableboxes();
    message.classList.add("hide");
};
const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disbaleboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const gamedraw = () => {
    msg.innerText=`Game drawn!`;
    message.classList.remove("hide");
    disbaleboxes();
};
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn==="O"){
            box.innerText="O";
            turn="X";
        }else{
            box.innerText="X";
            turn="O";
        }
        box.disabled="true";
        count++;
        let winner=checkWinner();
        if(count===9 && !winner){
            gamedraw();
        }
    });
});
const checkWinner=()=>{
    for(let pattern of WinningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!==""){
            if(pos1===pos2 && pos1===pos3){
                declareWinner(pos1);
                return true;
            }
        }
    }
};
const declareWinner=(pos)=>{
    msg.innerText=`Congratulations!\nPlayer ${pos} won the game`;
    message.classList.remove("hide");
    disbaleboxes;
};
restart.addEventListener("click",reset);
newgame.addEventListener("click",reset);


