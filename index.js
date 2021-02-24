/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'red';

/***** Deliverable 3 *****/
 console.log('This is what the traveler object looks like: ', traveler)

 const person = document.querySelector('#profile');
 const image = person.querySelector('img');
 const head2 = person.querySelector('h2');
 const em = person.querySelector('em');

 image.src = traveler.photo;
 head2.innerText = traveler.name;
 em.innerText = traveler.nickname;
 //innerText, textContent, innerHtml

 console.log(person);

/***** Deliverable 4 *****/

const animal = document.querySelector('#animals');
const para = animal.querySelector('p');
const imge = animal.querySelector('img');
const linky = animal.querySelector('a');

imge.src = animal.photo;
para.innerText = animal.species;



/***** Deliverable 5 *****/
