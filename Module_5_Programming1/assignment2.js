marks = 79;

switch (marks) {
    case marks > 95:
        console.log('A+');
        break;
    case marks > 88 && marks <= 90:
        console.log('A');
        break;
    case marks > 84 && marks <= 88:
        console.log('B+')
    case marks > 76 && marks <= 84:
        console.log('B');
        break;
    case marks > 70 && marks <= 76:
        console.log('C+');
        break;
    case marks > 67 && marks <= 70:
        console.log('C');
        break;
    case marks > 67 && marks <= 70:
        console.log('D+');
        break;
    case marks > 64 && marks <= 67:
        console.log('D');
        break;
    case marks <= 64:
        console.log('F');
        break;
    default:
        console.log('Error occurred.');
}
