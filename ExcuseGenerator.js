



  function excuseGenerator() {
    let noun = ["My dog ", "Homeless Joe ", "My moms bear "];
    let verb=["ate ", "burned ", "stole ", "killed ", "destroyed ", "broke "];
    let avoid =["my homework", "my final project", "my shoes"];
    let time = [" yesterday", " an hour ago"];

    let randomExcuseNoun = noun[Math.floor(noun.length * Math.random())];
    let randomVerb = verb[Math.floor(verb.length * Math.random())];
    let randomAvoid = avoid[Math.floor(avoid.length * Math.random())];
    let randomTime = time[Math.floor(time.length * Math.random())];

    let finalExcuse = randomExcuseNoun + randomVerb + randomAvoid + randomTime;
    document.getElementById("excuse").innerHTML = finalExcuse;
 }