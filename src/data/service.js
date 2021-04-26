console.log("App is running");

const api_url =
  "https://hubspotwebteam.github.io/CodeExercise/src/js/data/data.json";

//Get all data -- SOrted
export const getAllData = async () => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const array = data.media;
    const arraySorted = [...array].sort((a, b) => {
      let textA = a.title.toUpperCase();
      let textB = b.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    return arraySorted;
  } catch (error) {
    console.log(error);
  }
};

//Filter by type -- Sorted
export const getType = async (input) => {
  const response = await fetch(api_url);
  const data = await response.json();
  const array = data.media;

  const typeArray = array.filter((i) => {
    return i.type === input;
  });

  const arraySorted = [...typeArray].sort((a, b) => {
    let textA = a.title.toUpperCase();
    let textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return arraySorted;
};

getType();

//Filter by user search
export const getDataTitle = async (input) => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const array = data.media;

    const result = array.filter((i) => {
      return i.title.toLowerCase() === input.toLowerCase();
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

getDataTitle();

//Getting all unique genre to pass to drop down menu
export const getAllGenre = async () => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const arrayMedia = data.media;

    const arrayGenre = arrayMedia.map((i) => {
      return i.genre;
    });

    const allGenre = arrayGenre.flat();
    const uniqueGenre = [...new Set(allGenre)];

    return uniqueGenre;
  } catch (error) {}
};

getAllGenre();

//Getting all unique book genre to pass to drop down menu
export const getBookGenre = async () => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const arrayMedia = data.media;

    const arrayBook = arrayMedia.filter((i) => {
      return i.type === "book";
    });

    const arrayGenre = arrayBook.map((i) => {
      return i.genre;
    });

    const allBookGenre = arrayGenre.flat();
    const uniqueBookGenre = [...new Set(allBookGenre)];

    return uniqueBookGenre;
  } catch (error) {}
};

getBookGenre();

//Getting all unique movie genre to pass to drop down menu
export const getMovieGenre = async () => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const arrayMedia = data.media;

    const arrayBook = arrayMedia.filter((i) => {
      return i.type === "movie";
    });

    const arrayGenre = arrayBook.map((i) => {
      return i.genre;
    });

    const allMovieGenre = arrayGenre.flat();
    const uniqueMovieGenre = [...new Set(allMovieGenre)];
    return uniqueMovieGenre;
  } catch (error) {}
};

getMovieGenre();

//Getting all unique years to pass to drop down menu
export const getAllYear = async () => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const arrayMedia = data.media;

    const arrayYear = arrayMedia.map((i) => {
      return i.year;
    });
    const uniqueYear = [...new Set(arrayYear)];
    uniqueYear.sort();
    return uniqueYear;
  } catch (error) {}
};

getAllYear();

//Get items based on user input year -- This was supposed to be the function responsible for taking input from dropdown menu, but could not get a work-around to state management
// without having to refactor code, which I did not have time for.
//Same idea was to be used for the genre filter, with potentially taking an array as input, or taking in N arguments using rest operator, didn't get that far.
export const getDataYear = async (year) => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const array = data.media;

    const result = array.filter((i) => {
      return i.year === year;
    });
    console.log(result);
    return result;
  } catch (error) {}
};

getDataYear();
