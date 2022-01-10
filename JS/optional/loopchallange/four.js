//sigma add all the values from 1-100 onto sum

//for loop
var sum=0

for(i=0; i<=100; i++){
        sum = sum+=i;
    }

console.log(sum); 

//this just counts from 1-100

//while loop
i=0;
sum= 0;

while(i<=100){
    sum +=i;
    i++;
}
console.log(sum);

//this works! ohhh because in the for loop i originally defnied var sum is 0  in side the loop! it goes back to 0
