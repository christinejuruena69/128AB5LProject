var studentsData = [
    {
        classID: 'pLP5jgpWbyNQcHjbg',
        studentNumber: '2001-12345',
        fullname: 'Paul John',
        nickname: 'PJ',
        birthday : 'ISODate("2016-03-26T02:41:22.138Z")',
        section: "1-L",
        points: 2,
        bias: 5,
        isBlackListed: true
    },
    {
        classID: 'pLP5jgpWbyNQcHjbg',
        studentNumber: '2011-00541',
        fullname: 'Juan Paolo Bandong',
        nickname: 'Pao',
        birthday : 'ISODate("2016-03-26T02:41:22.138Z")',
        section: "1-L",
        points: 5,
        bias: 2,
        isBlackListed: false
    },
    {
        classID: 'pLP5jgpWbyNQcHjbg',
        studentNumber: '2011-54321',
        fullname: 'Ana Salvador',
        nickname: 'Ana',
        birthday : 'ISODate("2016-03-26T02:41:22.138Z")',
        section: "1-L",
        points: 0,
        bias: 0,
        isBlackListed: true
    },
    {
        classID: 'pLP5jgpWbyNQcHjbg',
        studentNumber: '2013-12345',
        fullname: 'Jonathan Secant',
        nickname: 'Johnny',
        birthday : 'ISODate("2016-03-26T02:41:22.138Z")',
        section: '1-L',
        points: 0,
        bias: 0,
        isBlackListed: false
    }
];

Template.studentsList.helpers({
    students: studentsData,
    
});


