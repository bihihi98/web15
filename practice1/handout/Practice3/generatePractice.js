function sort(input) {
  for(let i=0;i<input.length;i++){
    let j = i+1;
    let vt = i;
    let tmp = input[i];
    for(;j<input.length;j++){
      if(input[j]<tmp){
        tmp=input[j];
        vt = j;
      }
    }
    input[vt]=input[i];
    input[i]=tmp;
    }
    return input;
  }

function generate(testLengthArray){
  let arr1=[];
  for(let i = 0;i<testLengthArray;i++){
    let tmp = testLengthArray[i];
    let input = [];
    while(tmp>0){
      input[tmp-1] = Math.floor(Math.random()*20000-10000);
      tmp--;
    }
    sort(input);
    let target=Math.floor(Math.random()*20000-10000);
    let output=input.indexOf(target);
    let item={"input":input,"target":target,"output":output};
    arr1.push(item);
  }
  return arr1;
}

module.exports = generate
