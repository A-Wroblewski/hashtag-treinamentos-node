export default function arraySorter(array) {
    const sortedArray = array.sort((b, a) => {
        if (a.points > b.points) {
            return 1;
        } else if (a.points < b.points) {
            return -1;
        }
        return 0;
    });
    return sortedArray;
}
