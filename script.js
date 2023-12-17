const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let newarr=[];
let newarr2=[];


const divide = (arr, n) => {
  // Write your code here
	for(let i=0;i<arr.length;i++)
		{
			sum=sum+arr[i];
			
			if(sum<=n)
			{
			newarr.push(arr[i]);
			}
			else{
				newarr2.push(newarr);
				newarr=[];
			}
		}
	alert("abc");
};
const n = prompt("Enter n:");
divide(arr,i);

