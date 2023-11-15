// Questo è il file che contiene tutto il codice JS della pagina web
// Stampare i numeri da 1 a 100 
// Stampare fizz per i multipli di 3
// Stampare buzz per i multipli di 5 
// Stampare fizzbuzz per i multipli di 3 e 5


//Stampo i numeri da 1 a 100 

for (let i = 1; i<=100; i++) {
    
  // Se sono multipli di 3 e 5 stampo FizzBuzz
    if(i % 15 ==0) {
        console.log("FizzBuzz");
    }
 // Se sono multipli di 3 stampo Fizz
   
    else if(i % 3 ==0) {
        console.log("Fizz");
    }

 // Se sono multipli di 5 stampo Buzz   
    
    else if(i % 5 ==0) {
        console.log("Buzz");
    }

 // Altrimenti stampo i   

    else   console.log(i);
    

} 