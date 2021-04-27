# Submission Notes

These notes will be read by HubSpot developers. Drop us a line!

## Given more time, what would you have done differently?

Focus more on getting the genre filter to work early on, underestimated / overcomplicated my attempted solution.
Potentially figure out a different solution for the orange circles in exercise 1, as they are not as responsive as I would like.
I would have liked to have added unit testing + cypress.
Minor styling blemishes.
Fixed that image that was placed to not load on purpose, potentially a try/catch on a function or a check on the img src.

## How did you deviate from the directions, if at all, and why?

Did not deviate from the directions (that I know off).

## Is there anything else you'd like to let us know?

I was having issues with Parcel, so I ended up using webpack through the npx-create-react-app script and then brought over the assets from the original repo.
Also as mentioned earlier, I did not get genre/year filter functionality working, I have commented the code where I attempted to do so. I was having issues taking the state from my dropdown
components, in order to pass it to the card component, to execute a function that would search by genre/year etc. I did not have the time to refactor my code in such a way that the state
could be passed as prop to the Card component (if thats even the way to do it). Other than that, actually quite enjoyed the assessment.
Site is live at: https://quizzical-raman-67c40c.netlify.app/
