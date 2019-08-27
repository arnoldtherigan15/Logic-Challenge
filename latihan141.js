var contacts = [
    {
        Id: 1,
        name: 'Andi',
        gender: 'male',
        group_ids: [1, 2, 3]
    }, {
        Id: 2,
        name: 'Budi',
        gender: 'male',
        group_ids: [1, 2]
    }, {
        Id: 3,
        name: 'Cindy',
        gender: 'male',
        group_ids: [1]
    }, {
        Id: 4,
        name: 'David',
        gender: 'male',
        group_ids: [1, 2]
    }, {
        Id: 5,
        name: 'Emily',
        gender: 'male',
        group_ids: [1, 2, 3]
    }
];

var groups = [
    {
        id: 1,
        name: 'Teman SMP'
    }, {
        id: 2,
        name: 'Teman SMA'
    }, {
        id: 3,
        name: 'Teman Kuliah'
    }
];

function showContactByGroup(group_name) {
    var id = 0;
    for (var i = 0; i < groups.length; i++) {
        if (groups[i]['name'] === group_name) {
            id = groups[i]['id'];
        }
    }
    var result = [];
    for (var j = 0; j < contacts.length; j++) {
        for (var k = 0; k < contacts[j]['group_ids'].length; k++) {
            if (contacts[j]['group_ids'][k] === id) {

                result.push(contacts[j]['name'])
            }
        }
    }
    console.log(result);
}

//   Contoh 1 :
showContactByGroup('Teman Kuliah');

//result yang diharapkan :   ["Andi", "Emily"] 

// Contoh 2 :
showContactByGroup('Teman SMA');

//result yang diharapkan :   ["Andi", "Budi", "David", "Emily"]  

// Contoh 3 :
showContactByGroup('Teman SMP');

//result yang diharapkan :   ["Andi", "Budi", "Cindy", "David", "Emily"]