/*****************************************************************************/
/*  Server Methods - Only used for creation of dummy Data*/
/*****************************************************************************/

Meteor.methods({
    'Bootstrap/CreateClassData': function () {

        var teacher = Meteor.users.findOne({ username: 'teacher' });

        var StudentData = {
            fullname: 'Jonathan Secant',
            studentNumber: '2013-12345',
            nickname: 'Johnny',
            birthday: new Date(),
            section: '1-L'
        };
        //lodash.fill(new Array(10), StudentData);

        var studentArray =  [
            {"studentNumber":"2015-48757","sex":"F","nickname":"Doris","fullname":"Doris Turner","birthday":"1/16/1997","section":"7-L","bias":10,"points":2,"isBlackListed":true},
            {"studentNumber":"2012-82049","sex":"M","nickname":"Brandon","fullname":"Brandon Little","birthday":"1/16/1997","section":"6-L","bias":10,"points":0,"isBlackListed":false},
            {"studentNumber":"2014-15754","sex":"M","nickname":"Earl","fullname":"Earl Smith","birthday":"6/9/1997","section":"4-L","bias":8,"points":0,"isBlackListed":false},
            {"studentNumber":"2014-84840","sex":"F","nickname":"Tammy","fullname":"Tammy Nelson","birthday":"2/4/1997","section":"7-L","bias":7,"points":2,"isBlackListed":true},
            {"studentNumber":"2014-78350","sex":"M","nickname":"Justin","fullname":"Justin Watkins","birthday":"10/16/1996","section":"6-L","bias":7,"points":0,"isBlackListed":true},
            {"studentNumber":"2015-53742","sex":"M","nickname":"Larry","fullname":"Larry Parker","birthday":"9/23/1994","section":"7-L","bias":9,"points":1,"isBlackListed":false},
            {"studentNumber":"2012-27769","sex":"F","nickname":"Anna","fullname":"Anna Mason","birthday":"7/7/1997","section":"6-L","bias":10,"points":0,"isBlackListed":true},
            {"studentNumber":"2012-56851","sex":"M","nickname":"Billy","fullname":"Billy Austin","birthday":"8/20/1995","section":"6-L","bias":10,"points":2,"isBlackListed":false},
            {"studentNumber":"2012-42889","sex":"M","nickname":"Clarence","fullname":"Clarence Cole","birthday":"8/2/1994","section":"6-L","bias":9,"points":0,"isBlackListed":true},
            {"studentNumber":"2015-86835","sex":"F","nickname":"Kathryn","fullname":"Kathryn Watson","birthday":"4/10/1996","section":"7-L","bias":9,"points":0,"isBlackListed":false},
            {"studentNumber":"2010-10150","sex":"F","nickname":"Anne","fullname":"Anne Austin","birthday":"2/24/1996","section":"7-L","bias":7,"points":1,"isBlackListed":false},
            {"studentNumber":"2015-09650","sex":"F","nickname":"Ruby","fullname":"Ruby Ward","birthday":"4/30/1997","section":"4-L","bias":9,"points":0,"isBlackListed":true},
            {"studentNumber":"2015-03085","sex":"F","nickname":"Emily","fullname":"Emily Hunter","birthday":"1/27/1997","section":"6-L","bias":9,"points":0,"isBlackListed":true},
            {"studentNumber":"2015-59164","sex":"M","nickname":"Harry","fullname":"Harry White","birthday":"1/7/1997","section":"7-L","bias":9,"points":1,"isBlackListed":false},
            {"studentNumber":"2015-60737","sex":"F","nickname":"Pamela","fullname":"Pamela Gonzales","birthday":"9/26/1996","section":"7-L","bias":10,"points":2,"isBlackListed":false},
            {"studentNumber":"2015-55162","sex":"M","nickname":"Gary","fullname":"Gary Duncan","birthday":"2/15/1996","section":"6-L","bias":7,"points":2,"isBlackListed":true},
            {"studentNumber":"2015-25981","sex":"F","nickname":"Judy","fullname":"Judy Wood","birthday":"6/17/1995","section":"7-L","bias":7,"points":1,"isBlackListed":false},
            {"studentNumber":"2015-43889","sex":"F","nickname":"Brenda","fullname":"Brenda Elliott","birthday":"12/13/1996","section":"4-L","bias":10,"points":2,"isBlackListed":true},
            {"studentNumber":"2013-89140","sex":"F","nickname":"Gloria","fullname":"Gloria Gordon","birthday":"2/18/1996","section":"6-L","bias":9,"points":2,"isBlackListed":true},
            {"studentNumber":"2015-36737","sex":"F","nickname":"Sarah","fullname":"Sarah Cunningham","birthday":"4/5/1996","section":"5-L","bias":9,"points":0,"isBlackListed":false},
            {"studentNumber":"2013-97242","sex":"F","nickname":"Maria","fullname":"Maria Romero","birthday":"11/30/1995","section":"1-L","bias":10,"points":2,"isBlackListed":true},
            {"studentNumber":"2014-10080","sex":"M","nickname":"John","fullname":"John Porter","birthday":"6/25/1994","section":"7-L","bias":10,"points":2,"isBlackListed":false},
            {"studentNumber":"2015-65420","sex":"F","nickname":"Linda","fullname":"Linda Hayes","birthday":"11/6/1997","section":"7-L","bias":7,"points":1,"isBlackListed":true},
            {"studentNumber":"2015-98185","sex":"M","nickname":"Frank","fullname":"Frank Myers","birthday":"10/8/1994","section":"7-L","bias":8,"points":2,"isBlackListed":false}
        ];

        var sampleClass = {
            courseTitle: 'Introduction to Software Engineering',
            courseCode: 'CMSC 128',
            semester: '1st Semester AY 2015-2016',
            section: 'AB',
            lecturer: teacher._id,
            students: studentArray
        };

        function start() {

            if(Class.find({ courseTitle: 'Introduction to Software Engineering' }).count() === 0) {
                console.log('Inserting dummy data for Class');
                Class.insert(sampleClass);
                console.log('Finished inserting dummy data for Class');
            }
            else {
                console.log('Dummy Class data exists already');
            }

        }

        start();
    }
});
