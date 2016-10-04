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
  * can put int lockers and assignments into students.json as well.
