const movies = [
  { title: "The Godfather" },
  { title: "Titanic" },
  { title: "Forrest Gump" },
  { title: "The Shawshank Redemption" },
  { title: "The Dark Knight" },
  { title: "Pulp Fiction" },
  { title: "The Silence of the Lambs" },
  { title: "The Matrix" },
  { title: "Goodfellas" },
  { title: "Fight Club" },
  { title: "Star Wars: Episode IV - A New Hope" },
  { title: "Jaws" },
  { title: "E.T. the Extra-Terrestrial" },
  { title: "Raiders of the Lost Ark" },
  { title: "Jurassic Park" },
  { title: "Terminator 2: Judgment Day" },
  { title: "Back to the Future" },
  { title: "The Lion King" },
  { title: "The Wizard of Oz" },
  { title: "Gone with the Wind" },
  { title: "Schindler's List" },
  { title: "The Green Mile" },
  { title: "Saving Private Ryan" },
  { title: "The Departed" },
  { title: "The Godfather: Part II" },
  { title: "Rocky" },
  { title: "Top Gun" },
  { title: "The Breakfast Club" },
  { title: "Ferris Bueller's Day Off" },
  { title: "Pretty Woman" },
  { title: "Dirty Dancing" },
  { title: "Ghost" },
  { title: "The Sixth Sense" },
  { title: "The Usual Suspects" },
  { title: "American Beauty" },
  { title: "A Few Good Men" },
  { title: "The Social Network" },
  { title: "The Big Lebowski" },
  { title: "The Princess Bride" },
  { title: "Fargo" },
  { title: "No Country for Old Men" },
  { title: "The Hurt Locker" },
  { title: "The Revenant" },
  { title: "La La Land" },
  { title: "Moonlight" },
  { title: "Black Panther" },
  { title: "The Avengers" },
  { title: "The Hunger Games" },
  { title: "The Fault in Our Stars" },
  { title: "The Notebook" }
];

export function getRandomMoviesTitle(){
  return movies[Math.floor(Math.random() * 50) + 1].title;
}