'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Candidates",
      [
        {
          displayName: "Michael Bennet",
          dob: "November 28 1964",
          pob: "New Delhi, India",
          experience: "U.S. Senator from Colorado (2009–present)",
          campaignStart: "May 2, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Michael_Bennet_Official_Photo_%28cropped%29.jpg/123px-Michael_Bennet_Official_Photo_%28cropped%29.jpg",
          state: "Colorado",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          displayName: "Joe Biden",
          dob: "November 20 1942",
          pob: "Scranton, Pennsylvania",
          experience: "Vice President of the United States (2009–2017)",
          campaignStart: "April 25, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Joe_Biden_2013.jpg/117px-Joe_Biden_2013.jpg",
          state: "Delaware",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Cory Booker",
          dob: "April 27 1969",
          pob: "Washington, D.C.",
          experience: "U.S. Senator from New Jersey (2013–present)",
          campaignStart: "February 1, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg/131px-Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg",
          state: "New Jersey",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Steve Bullock",
          dob: "April 11 1966",
          pob: "Missoula, Montana",
          experience: "\tGovernor of Montana (2013–present)",
          campaignStart: "May 14, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Montana_Governor_Steve_Bullock_%2828963844060%29_%28cropped%29_%28cropped%29.jpg/122px-Montana_Governor_Steve_Bullock_%2828963844060%29_%28cropped%29_%28cropped%29.jpg",
          state: "Montana",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Pete Buttigieg",
          dob: "January 19, 1982",
          pob: "South Bend, Indiana",
          experience: " Mayor of South Bend, Indiana (2012–present)",
          campaignStart: "April 14, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pete_Buttigieg_in_February_2019.jpg/120px-Pete_Buttigieg_in_February_2019.jpg",
          state: "Indiana",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Julian Castro",
          dob: "September16, 1974",
          pob: "San Antonio, Texas",
          experience: "U.S. Secretary of Housing and Urban Development (2014–2017)",
          campaignStart: "January 12, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Juli%C3%A1n_Castro%27s_Official_HUD_Portrait_%28cropped%29.jpg/113px-Juli%C3%A1n_Castro%27s_Official_HUD_Portrait_%28cropped%29.jpg",
          state: "Texas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Bill de Blasio",
          dob: "May 8, 1961",
          pob: "Manhattan, New York",
          experience: "Mayor of New York City, New York (2014–present)",
          campaignStart: "May 16, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bill_de_Blasio_11-2-2013.jpg/119px-Bill_de_Blasio_11-2-2013.jpg",
          state: "New York",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "John Delaney",
          dob: "April 16, 1963",
          pob: "Wood-Ridge, New Jersey",
          experience: "U.S. Representative from MD-06 (2013–2019)",
          campaignStart: "July 28, 2017",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/John_Delaney_113th_Congress_official_photo_%28cropped%29_2.jpg/122px-John_Delaney_113th_Congress_official_photo_%28cropped%29_2.jpg",
          state: "Maryland",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Tulsi Gabbard",
          dob: "April 12, 1981",
          pob: "Leloaloa, American Samoa",
          experience: "U.S. Representative from HI-02 (2013–present)",
          campaignStart: "January 11, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress_%28cropped_3%29.jpg/122px-Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress_%28cropped_3%29.jpg",
          state: "Hawaii",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Kirsten Gillibrand",
          dob: "\tDecember 9, 1966",
          pob: "Albany, New York\t",
          experience: "U.S. Senator from New York (2009–present)",
          campaignStart: "March 17, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kirsten_Gillibrand%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/109px-Kirsten_Gillibrand%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg",
          state: "New York",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Mike Gravel",
          dob: "May 13, 1930",
          pob: "Springfield, Massachusetts",
          experience: "U.S. Senator from Alaska (1969–1981)",
          campaignStart: "April 8, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Mike_Gravel_cropped.png/112px-Mike_Gravel_cropped.png",
          state: "California",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Kamala Harris",
          dob: "October 20, 1964",
          pob: "Oakland, California",
          experience: "U.S. Senator from California (2017–present)",
          campaignStart: "January 21, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kamala_Harris_official_photo_%28cropped%29.jpg/118px-Kamala_Harris_official_photo_%28cropped%29.jpg",
          state: "California",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "John Hickenlooper",
          dob: "February 7, 1952",
          pob: "Narberth, Pennsylvania",
          experience: "Governor of Colorado (2011–2019)",
          campaignStart: "March 4, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/John_Hickenlooper_by_Gage_Skidmore.jpg/119px-John_Hickenlooper_by_Gage_Skidmore.jpg",
          state: "Colorado",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Jay Inslee",
          dob: "February 9, 1951",
          pob: "Seattle, Washington",
          experience: "Governor of Washington (2013–present)",
          campaignStart: "March 1, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jay_Inslee_official_portrait_%28cropped_2%29.jpg/123px-Jay_Inslee_official_portrait_%28cropped_2%29.jpg",
          state: "Washington",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Amy Klobuchar",
          dob: "May 25, 1960",
          pob: "Plymouth, Minnesota\t",
          experience: "U.S. Senator from Minnesota (2007–present)",
          campaignStart: "February 10, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped_2%29.jpg/124px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped_2%29.jpg",
          state: "Minnesota",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Wayne Messam",
          dob: "June 7, 1974",
          pob: "South Bay, Florida",
          experience: "Mayor of Miramar, Florida (2015–present)",
          campaignStart: "March 28, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mayor_Messam.jpg/128px-Mayor_Messam.jpg",
          state: "Florida",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Seth Moulton",
          dob: "October 24, 1978",
          pob: "Salem, Massachusetts",
          experience: "U.S. Representative from MA-06 (2015–present)",
          campaignStart: "April 22, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Seth_Moulton_%28cropped_2%29.jpg/118px-Seth_Moulton_%28cropped_2%29.jpg",
          state: "Massachusetts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Beto O'Rourke",
          dob: "September 26, 1972",
          pob: "El Paso, Texas",
          experience: "U.S. Representative from TX-16 (2013–2019)",
          campaignStart: "March 14, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Beto_O%27Rourke%2C_Official_portrait%2C_113th_Congress_%28cropped_3%29.jpg/123px-Beto_O%27Rourke%2C_Official_portrait%2C_113th_Congress_%28cropped_3%29.jpg",
          state: "Texas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Tim Ryan",
          dob: "July 16, 1973",
          pob: "Niles, Ohio",
          experience: "U.S. Representative from OH-13 (2013–present)",
          campaignStart: "April 4, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Rep._Tim_Ryan_Congressional_Head_Shot_2010_%28cropped_3%29.jpg/114px-Rep._Tim_Ryan_Congressional_Head_Shot_2010_%28cropped_3%29.jpg",
          state: "Ohio",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Bernie Sanders",
          dob: "September 8, 1941",
          pob: "Brooklyn, New York",
          experience: "\tU.S. Senator from Vermont (2007–present)",
          campaignStart: "February 19, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bernie_Sanders.jpg/126px-Bernie_Sanders.jpg",
          state: "Vermont",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Eric Swalwell",
          dob: "November 16, 1980",
          pob: "Sac City, Iowa",
          experience: "U.S. Representative from CA-15 (2013–present)",
          campaignStart: "April 8, 2019",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Eric_Swalwell_114th_official_photo_%28cropped%29.jpg/112px-Eric_Swalwell_114th_official_photo_%28cropped%29.jpg",
          state: "California",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Elizabeth Warren",
          dob: "June 22, 1949",
          pob: "Oklahoma City, Oklahoma",
          experience: "U.S. Senator from Massachusetts (2013–present)",
          campaignStart: "February 9, 2019",
          image: "https://en.wikipedia.org/wiki/File:Elizabeth_Warren,_official_portrait,_114th_Congress_(cropped)(2).jpg",
          state: "Massachusetts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Marianne Williamson",
          dob: "July 8, 1952",
          pob: "Houston, Texas",
          experience: "Author, lecturer, and activist",
          campaignStart: "January 28, 2019",
          image: "https://en.wikipedia.org/wiki/File:Marianne_Williamson_-_33252886458_(cropped).jpg",
          state: "California",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          displayName: "Andrew Yang",
          dob: "January 13, 1975",
          pob: "Schenectady, New York",
          experience: "Schenectady, New York\tEntrepreneur, philanthropist, and founder of Venture for America",
          campaignStart: "November 6, 2017",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Andrew_Yang_talking_about_urban_entrepreneurship_at_Techonomy_Conference_2015_in_Detroit%2C_MI_%28cropped%29.jpg/111px-Andrew_Yang_talking_about_urban_entrepreneurship_at_Techonomy_Conference_2015_in_Detroit%2C_MI_%28cropped%29.jpg",
          state: "New York",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Candidates', null, {});
  }
};
