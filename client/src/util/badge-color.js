export default function changeBadgeColor(param, cb) {
    switch (param) {
        case 'IRON':
            cb('')
            break;
        case 'BRONZE':
            cb('#a26769')
            break;
        case 'SILVER':
            cb('#e1e5f2')
            break;
        case 'GOLD':
            cb('#ffe169')
            break;
        case 'PLATINUM':
            cb('#ada7c9')
            break;
        case 'DIAMOND':
            cb('#bfdbf7')
            break;
        case 'MASTER':
            cb('#9f9fed')
            break;
        case 'GRANDMASTER':
            cb('#840032')
            break;
        case 'CHALLENGER':
            cb('#e06d06')
            break;
        case 'Unranked':
            cb('#ffe5d9')
            break;
        default: cb('#d0cdd7')
    }
}