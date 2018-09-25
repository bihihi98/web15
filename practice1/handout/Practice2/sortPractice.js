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
  module.exports = sort


