
function gooi(){
    console.log('Er is gegooid');
    let gegooideNummers = [];
    for(i = 0 ; i < 8 ; i++){
        gegooideNummers.push(Math.floor((Math.random() * 6) + 1));
    }
    console.log(gegooideNummers);
    const worp = telWorp(gegooideNummers);
    console.log(worp);
    updateTable(worp);
}

function telWorp(arr){
    arr.sort;
    let worp = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };
    for(i = 0 ; i < arr.length ; i++){
        for(j = 0 ; j < arr.length ; j++){
            if(arr[i] === j){
                worp[j] += 1;
            }
        }
    }
    return worp;
}

function updateTable(worp){
    document.getElementById("count1").innerText = worp[1];
    document.getElementById("count2").innerText = worp[2];
    document.getElementById("count3").innerText = worp[3];
    document.getElementById("count4").innerText = worp[4];
    document.getElementById("count5").innerText = worp[5];
    document.getElementById("count6").innerText = worp[6];
}