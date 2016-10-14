2016-10-02-SUN
    * cloned from angular-seed v1
    * pushed to new repo
    * created new branch for initial refactoring (01-initial-refactoring)  clever.
    * 01-student-data (messed up the number.... grrr....)
      * removed the version components.
      * added bootstrap
2016-10-03-MON
  * 01-student-data
    + refactored list and template in dash using templates in angular-phonecat tutorial.
      strategy is to follow phonecat evolution but using our data
    + included sorting and querying
    + NOTE:  not updating unit testing (karma) or e2e testing (protractor) at the moment.
      save this for a separate session once I get the refactoring done per angular-phonecat
      tutorial.
    + json-server and faker
      - created students directory and file students_faker_generate.js to generate
        simple student JSON file: idnumber, lastname, firstname
      - saved file as students.json
      - used phonecat step-7 to get http working loading the json data file.
  * 01a-rename-dash
    + I decided to rename the dashboard to studentlist, and implement a dashboard
      later.
    + merge complete to 01-student-data
    + NOTE:  kept getting the windows "permission denied" on stat error.  The fix
      seemed to be to close atom so that Windows doesn't keep a lock on the files.
 * 01-student-data
    + works except for the detail view.  The problem is that the Student service
      retrieves a json file according to the studentId.  (See core/student/student.service.js)
      Thus, for student 94, it would try to retrieve components/students/94.json, which doesn't
      exist.  For a general GET, however, it grabs the entire students.json file which
      has the entire list, which works fine.
2016-10-04-TUE
  * finished 01-student-data for students ONLY (no lockers yet)
  * using json-server --watch db.json (renamed from students.json)
  * can put lockers and assignments into db.json as well

2016-10-08-SAT
  * cool service:  http://www.mockapi.io
  * created a mock api at:  http://www.mockapi.io/#/mocks/57f940e9a50475110077fc35
    * student:  http://57f940e9a50475110077fc34.mockapi.io/api/v1/students/:id
      - includes locker information
    * locker:    http://57f940e9a50475110077fc34.mockapi.io/api/v1/lockers/:id
    * locker assigned to a student:   http://57f940e9a50475110077fc34.mockapi.io/api/v1/students/5/lockers
  * new services laid in and running.  One glitch is that mockapi.io doesn't
    seem to/I don't know how to make the lockers resource searchable w/out the
    parent object (student).  So I cloned the data, but the two Lockers resources
    don't seem to match.  Small thing, bc in working version they will be synced.
  * future:  I'd love to use localstorage or local nosql db....

2016-10-09-SUN

  * added branches:  develop and 04-ui-boostrap
  * using: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

2016-10-12-WED
  * branch: 04-ui-bootstrap
  * brought in bootstrap via angular-bootstrap
  * converted students-list and lockers-list to bootstrap tables
  * in the process of converting the sorting from the drop down menu to
    a clickable header, but it's not working so far...

2016-10-13-THU
  * Oh.  student-list is being initialized twice.  the onInit() function in the controller
    is being recalled each time.... b/c of the <a> tag reloading in the sort?  dunno?
  * Wow.  Just writing that last note led me to change all the <a> elements that were
    hosting the ng-clicks to <div>s.  Problem solved.  It was the <a> tag that was reloading
    the entire page and thus re-initializing the controller, thus setting all the
    sorting back to the initial settings.
  * todo:  when the sorting is clicked, it changes the width of the columns.

2016-10-14-FRI
  * 
