function checkScope() {
    var xVar = "var1";
    if (true) {
       var xVar = "var2";
       console.log(xVar); 
    }
    console.log(xVar);
   
    let xLet = "let1";
    if (true) {
       let xLet = "let2";
       console.log(xLet);
    }
    console.log(xLet);
   
    const xConst = "const1";
    if (true) {
       const xConst = "const2";
       console.log(xConst);
    }
    console.log(xConst);
}
   
checkScope();