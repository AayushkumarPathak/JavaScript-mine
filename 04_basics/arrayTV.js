const arr = ["lpu","cu","IIT","IIIT","NIT","BITS"];

arr.forEach((item)=>{
    console.log(item);
});

const nums = [1,2,3,4,5,6,7,8,9,10,112,113];

const newNums = nums.filter((num)=> num%2==0 );
console.log(newNums);

const movies = [
    { id: 1, name: "The Dark Knight", genre: "Action", release_date: "2008-07-18" },
    { id: 2, name: "Inception", genre: "Sci-Fi", release_date: "2010-07-16" },
    { id: 3, name: "The Shawshank Redemption", genre: "Drama", release_date: "1994-09-22" },
    { id: 4, name: "Pulp Fiction", genre: "Crime", release_date: "1994-10-14" },
    { id: 5, name: "Forrest Gump", genre: "Drama", release_date: "1994-07-06" },
    { id: 6, name: "The Matrix", genre: "Sci-Fi", release_date: "1999-03-31" },
    { id: 7, name: "Avatar", genre: "Action", release_date: "2009-12-18" },
    { id: 8, name: "The Godfather", genre: "Crime", release_date: "1972-03-24" },
    { id: 9, name: "Gladiator", genre: "Action", release_date: "2000-05-05" },
    { id: 10, name: "Titanic", genre: "Romance", release_date: "1997-12-19" }
  ];

const actionMovies =   movies.filter((it)=>{
    const mov = it.genre==="Action"
    return mov;
})  
// console.log(actionMovies);

const movie = movies.filter((it)=>{return it.id>8})
console.log(movie);


