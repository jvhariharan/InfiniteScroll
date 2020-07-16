export function getData(count: number): object[] {
    const names = ['TOM', 'Hawk', 'David', 'Lara', 'John', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani',
        'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams', 'Vinet', 'Mark', 'Chris'];
    const hours = [1, 2, 3, 4, 5, 6, 7, 8];
    const designation = ['Manager', 'Fresher', 'Senior Engineer', 'Tester', 'Team Lead', 'Product Owner'];
    const status = ['Completed', 'Open', 'In Progress', 'Review', 'Testing'];
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push({
            TaskID: i + 1,
            Engineer: names[Math.round(Math.random() * names.length)] || names[0],
            Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
            Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
            Status: status[Math.round(Math.random() * status.length)] || status[0]
        });
    }
    return result;
};