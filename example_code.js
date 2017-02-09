function outer(num)
  {
   var cube = num * num * num ;
   
    function inner()
    {
     console.log(`The cube of ${num} is ${cube}`);
    }
    return inner();
  }
  
  outer(9);