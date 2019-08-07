var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input) {
    var date = '';
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    date = input[3].split('/');
    var dateSort = input[3].split('/');
    dateSort = dateSort.sort(function (a, b) {
        return Number(b) > Number(a);
    })
    var mm = date[1];

    var dateJoin = date.join('-');
    console.log(input);
    switch (mm) {
        case '05':
            console.log('Mei');
            break;
    }
    console.log(dateSort);
    console.log(dateJoin);
    console.log(input[1].slice(0,15));

}
dataHandling2(input)
