$(ready)

function ready(){
    // console.log('it working');
    appendDivs();
}

function appendDivs(){

    for (let i=0; i<people.length; i++){
    console.log(people[i]);
        // append pics to the dom

        $('body').append(`<img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of Chris"></img>`)

}
}
