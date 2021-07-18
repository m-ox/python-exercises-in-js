const cl = console.log

const phoneList = ['4062070532', '4062948711', '4062070533', '4444444444']
const phoneOwners = ['Maudy', 'Planty', 'Mee', 'Nick']

// function solution(phone_numbers, phone_owners, number) {

//     for (let i = 0; i < phone_numbers.length; i++) {
        
//         let contact = phone_numbers[i]
//         // cl('contact:', contact, 'calling number:', number)

//         if (contact == number) {
//             return phone_owners[i]
//         }
//     }

//     return number

// }

// cl(solution(phoneList, phoneOwners, '4062948711'))

function solution(phone_numbers, phone_owners, number) {

    phoneBook = phone_numbers.map((phone_number, i) => {
        return {
            number: phone_number,
            owner: phone_owners[i]
        }
    })

    cl(phoneBook)

    const result = (phoneNumber) => {
        const foundEntry = phoneBook.find((entry) => {
            return entry.number === phoneNumber;
        })

        cl(foundEntry)
    }

}

solution(phoneList, phoneOwners, '4062948711')