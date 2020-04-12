# Pedal Board App

Pedal Board is community application where the user can add their favourite guitarist to the site and create a list of all the guitar effects pedals they use to create their unique sound. All previously used pedals are stored in the available pedals section and if the pedal is not available then they can can add the pedal. Here is a link to the [live site.](https://pedal-board.herokuapp.com/)


---

## User Stories

1.  As a user, I should be able to add new artists and include an image and a link to the wiki.
2. As a user, I should be able to see clearly the artists name, band and link to wiki.
3. As a user, I should be able to access the site on both desktop and mobile and should be responsive to all screen sizes.
4. As a user, I should be able to see all artists and all pedals.
5. As a user, I should be able to see the pedals associated with each artist and be able to make changes.

---

## Technologies used

##### Backend
- Python
- Django
- PostgresQL
- Pycharm
- Cors

##### Frontend
- JavaScript
- React
- Bootstrap
- Flexbox
- Atom

---

## Approach Taken

I began by working through the user stories and fleshing out what I wanted the app to be able to provide for the user. I used wire frames to mock up how I wanted the page to be presented and the flow I hoped to create. I chose the technologies I would use to help me achieve my goals and designed the models for the database and their relationships. I chose to use a SQL database as I wanted to have a many to many relationship between the two tables.

I chose to work with python and Django for the backend as a challenge for the final project. I spent the first day or so reading up about the language and how to use Django to build the server. It is very similar to the languages we had used in the course up to that point and django worked in mush the same way as rails. It took some getting used to pycharm and the different syntax but I was able to work through it and get a fully functional backend pretty quickly. One challenge was integrating postgresQL as the database because django is initially configured to use SQLite. I had to make this change as I planned to deploy the site on Heroku. It is notorious for wiping SQLite databases every 24hrs.

Once I had the back end up and running including two models with a many to many through relationship. Artists and Pedals. I then used create react app to build the front end. I mocked up a very basic page and made sure that I could connect to the backend and display the information to the page. I split the page into components and built them out one by one. Sarting with the Artist card component. I then cretaed a form component to make new artist. I added the delete button and functionality to the artist card and finally takled the update feature.

As the available pedals list can be added to the form need to be dynamic and adjust when new pedals were added so I created a function to display each pedal as a checkbox.

It was at this point that I ran into an issue. I had initially configured the backend to that I could add the pedals straight away when the artist was being created. However due to the model only returning the Id of the pedal I had to create functions to take the Id and gather the full pedal object for the available pedals, this created issues with updating state and it became clear that I had to change the backend to serve the full pedal object in the artist pedals array. Once I had made this change it meant that i could no longer add the pedals at the create stage.

I then tackled the available pedals section, building out full crud functionality and displaying them when the user clicked on the pedal heading.

I had been added small amounts of styling throughout the build to help with error handling and once I had full crud on both models i could focus on getting the app to truly look how I wanted it. I designed the app to present as an amplifier. the header uses a similar font to that of marshall the famous amplifier company and the header color of gold is to mimic the control panel of a marshall amp. The background of the page is the woven skin of the speaker.  I present both the artist and pedals in cards and have the artists display vertically and the pedals hidden at first but with a scroll on a horizontal list.

## Unsolved Problems

1. I would like the user to be able to add the pedals at the creation of the artist and if the pedal doesn't already exist they should be able to add it to both available pedals and the the artist they are creating.
2. I would like to have the update form checkboxes poulate based on the current state of the artists pedals.

## What I would like to add

1. I would like to create a user model, the user would be able to log in and have their own favourite artists.
2. The user could add comments.
3. The ability fo filter the page based on make and model of pedal.
4. the ability to filter the page based on bands.
