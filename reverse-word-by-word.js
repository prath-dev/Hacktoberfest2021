// reverse word by word from sentence.
// ex: This is JS world  => sihT si SJ .dlroW

const revrseSentenceWord = (quote)=>{
   
    const splitquote = quote.split(' ')

    const ks = splitquote.map(e=>{
       return  e.split('').reverse().join('');
    })

    console.log(ks.join(' '));
    
}
revrseSentenceWord("This is JS World.")