const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let newarr=[];
let new-2-arr=[];

const divide = (arr, n) => {
  // Write your code here
	for(let i=0;i<arr.length;i++)
		{
			sum=sum+arr[i];
			if(sum>n)
			{
			newarr.push(new-2-arr);
				new-2-arr=[];
				
			}
		}
	return newarr;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
