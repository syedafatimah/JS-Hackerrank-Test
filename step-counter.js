const counter = (function counter() {
    let value = 0;
    return {
      getValue: function() {
        return value;
      },
      changeBy: function(k) {
        value += k;
        return value;
      },
    }
  })();

function getFixedCounter(k){
    let mycounter = counter;
    return{
        increment: () => {
            mycounter.changeBy(k);
            //return mycounter;
        },
        decrement: ()  => {
            mycounter.changeBy(-k);
            //return mycounter;
        },
        getValue: () => {
            return mycounter.getValue();
            //return mycounter;
        }
    }
}

//Driver code
console.log(counter.getValue());
console.log(counter.changeBy(10));
console.log(counter.changeBy(10));
console.log(counter.getValue());


