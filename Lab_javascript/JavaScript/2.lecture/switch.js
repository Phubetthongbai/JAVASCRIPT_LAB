const status4 = 700;

switch (status4) {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('ERROR!');
        break;
    default:
        console.log('Unknow status')
}