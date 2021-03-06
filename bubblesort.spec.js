var arr = [0,6,3,6,7,8,5,4,4,-12,0,0,0,1298012831982309];

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts sorts an array from smallest to largest', function(){
    expect(bubbleSort(arr)).toEqual([-12,0,0,0,0,3,4,4,5,6,6,7,8,1298012831982309]);
  });

});

