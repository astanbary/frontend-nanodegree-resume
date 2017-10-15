// var bio json contains biographical information that will be displayed within the resume
var bio = {
  "name" : "April Stanbary",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "317-313-5136",
    "email" : "as2396@att.com",
    "github" : "astanbary",
    "twitter" : "arocindy",
    "location" : "Indianapolis, IN, US"
  },
  "welcomeMessage" : "Thank you for viewing my resume! I am a proven Technical Project Manager seeking a position within AT&T that offers a platform for extending and improving my web development skills.",
  "skills" : [
    "Project Management", " Programming", " Scrum", " Technical Requirements", "JavaScript", "HTML", "CSS"
  ],
  "bioPic" : "images/IMG_0532.jpg"
};

//this function replaces the placeholders with the appropriate biography information from the var bio section above
bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts, #footerContacts").append(formattedLocation);
  $("#topContacts, #footerContacts").append(formattedMobile);
  $("#topContacts, #footerContacts").append(formattedEmail);
  $("#topContacts, #footerContacts").append(formattedTwitter);
  $("#topcontacts, #footerContacts").append(formattedGithub);
  $("#header").prepend(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);
  $("#main").append(internationalizeButton);

$("#header").append(HTMLskillsStart);
  for (var skill = 0; skill < bio.skills.length; skill++){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills:last").append(formattedSkill);
  }
};

//the inName function allows the name to be converted for use with the internationalizebutton
function inName(name) {
  name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+ name[1];
}

// var projects json contains an array of projects related to web development/Technical Project Management along with an images array that provides images of those projects - all for use/display on the resume
var projects = {
  "projects" : [
    {
      "title" : "MyFleet Dashboard",
      "dates" : "2017",
      "description" : "The MyFleet Dashboard allows users to quickly view performance related to budget, metrics, and client satisfaction.",
      "images" : ["images/MyFleetDashboard.jpg"]
    },
    {
      "title" : "MyFleetGo",
      "dates" : "2017",
      "description" : "MyFleetGo is a website that is tailored for use with a smart phone which allows drivers to quickly access pertinent Fleet information.",
      "images" : ["images/MyFleetGo.jpg"]
    },
    {
      "title" : "MyFleet Client Portal",
      "dates" : "2015 - 2016",
      "description" : "The MyFleet Client Portal is a website that allows clients to manage everything related to their Fleet.",
      "images" : ["images/MyFleetClientPortal.jpg"]
    }
  ]
};

//The projects.display function allows the project json information to be presented on the resume
projects.display = function() {
  for (i = 0; i < projects.projects.length; i++){
    $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      if (projects.projects[i].images.length > 0){
        for (image = 0; image < projects.projects[i].images.length; image++){
          var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
          $(".project-entry:last").append(formattedImages);
        }
      }

      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
  }
};

// var work contains an array of jobs that will be displayed on the resume in the appropriate section
var work = {
  "jobs" : [
    {
      "employer" : "AT&T",
      "title" : "Technical Project Manager",
      "dates" : "2011 - present",
      "location" : "Indianapolis, IN, US",
      "description" : "Responsible for all aspects of SDLC (Software Development Life Cycle) management and oversight."
    },
    {
      "employer" : "AT&T",
      "title" : "Sr. Process/Quality Manager",
      "dates" : "2007 - 2011",
      "location" : "Indianapolis, IN, US",
      "description" : "Regional Staff Manager for all aspects of Central Office telephony."
    },
    {
      "employer" : "AT&T",
      "title" : "Project Manager",
      "dates" : "1997 - 2007",
      "location" : "Indianapolis, IN, US",
      "description" : "Project Manager for various telephony projects and initiatives."
    },
    {
      "employer" : "United States Navy",
      "title" : "Aviation Electronics Technician Second Class Petty Officer",
      "dates" : "1990 - 1996",
      "location" : "San Diego, CA, US",
      "description" : "Responsible for HS-60B helicopter avionics with a specialty in anti-submarine warfare equipment (e.g. dipping sonar transducers and cable reel assemblies)."
    }
  ]
};

//The below function allows for locations to be pushed for the map
function locationizer(work_obj){
  var locationArray = [];

  for (var job in work_obj.jobs){
    if (work_obj.jobs.hasOwnProperty(job)){
      var newLocation = work_obj.jobs[job].location;
      locationArray.push(newLocation);
    }
  }

  return locationArray;
}

console.log(locationizer(work));

//This allows the work json to be displayed correctly on the resume
work.display = function(){
  for (var i = 0; i < work.jobs.length; i++){
    $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $(".work-entry:last").append(formattedLocation, formattedDates, formattedDescription);
  }
};

//var eduction contains an array of schools attended along with cities, degrees, majors, and dates.  It also contains online school information
var education = {
  "schools": [
    {
      "name" : "Indiana Wesleyan University",
      "location" : "Indianapolis, IN, US",
      "degree" : "Master of Science",
      "major" : "Management",
      "dates" : "2006 - ",
    },
    {
      "name" : "Indiana Wesleyan University",
      "location" : "Indianapolis, IN, US",
      "degree" : "Bachelor of Science",
      "major" : "Management",
      "dates" : "2005 - ",
    },
    {
      "name" : "Hillsborough Community College",
      "location" : "Tampa, FL, US",
      "degree" : "Associate of Arts",
      "major" : "Liberal Arts",
      "dates" : "1990 - ",
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Intro to Programming",
      "school" : "Udacity",
      "dates" : 2017,
      "url" : "http://www.udacity.com"
    }
  ]
};

//This allows the education section to display with the appropriate information from the education json
education.display = function() {
  for (var school in education.schools) {
    if (education.schools.hasOwnProperty(school)) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name))
        .prepend(HTMLschoolDates.replace("%data%", education.schools[school].dates))
        .append(HTMLschoolName.replace("%data%", education.schools[school].location))
        .append(HTMLschoolDegree.replace("%data%", education.schools[school].degree))
        .append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
    }
  }

//This allows the Online Class information to be displayed on the resume in the appropriate section
  $("#education").append(HTMLonlineClasses);

//This allows the online course information from the above education section to be displayed appropriately in the online classes section of the resume
  for (var onlineCourse in education.onlineCourses){
    if(education.onlineCourses.hasOwnProperty(onlineCourse)) {
      var num = education.schools.length + parseInt (onlineCourse);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates))
        .append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school))
        .append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title))
        .append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
    }
  }
};


//This entry allows the Google Map to be displayed on the resume
$("#mapDiv").append(googleMap);

//The below entries call the display functions identified in this file so that the presentation can be compiled for the resume
bio.display();
work.display();
education.display();
projects.display();
