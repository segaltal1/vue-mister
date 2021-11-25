import { DbService } from "./db-service";

const KEY = 'contacts'
export const contactService = {
    query,
    get,
    save,
    remove,
    getEmptyContact
}



async function query() {
    var contacts = await DbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = _createDefaultcontacts();
        await DbService.insert(KEY, contacts);
    }
    return contacts;
}

async function get(contactId) {
    const contact = await DbService.get(KEY, contactId)
    if (!contact) throw new Error('Contact not exist')
    return contact

}

async function save(contact) {
    if (contact._id) return DbService.put(KEY, contact);
    else return DbService.post(KEY, contact)

}
async function remove(id) {
    return DbService.delete(KEY, id);

}

async function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: '0'
    }
}

function _createDefaultcontacts() {
    return [
        {
            "_id": "5a56640269f443a5d64b32ca",
            "name": "Ochoa Hyde",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (968) 593-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            "_id": "5123640269f443a5d64b32ca",
            "name": "Robert Lola",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (968) 593-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/2.jpg"

        },
        {
            "_id": "5a56640269f44312364b32ca",
            "name": "Olivia Noah	",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (952) 233-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/3.jpg"

        },
        {
            "_id": "2333640269f443a5d64b32ca",
            "name": "Michael Noah",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (968) 593-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/4.jpg"

        },
        {
            "_id": "5a56640269334312364b32ca",
            "name": "Olivia Noah	",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (952) 233-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/5.jpg"

        },
        {
            "_id": "2256640269334312364b32ca",
            "name": "Noria Malo	",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (932) 233-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/6.jpg"

        },
        {
            "_id": "4356640269334312364b32ca",
            "name": "Yola Zelbi	",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (932) 233-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/7.jpg"

        },
        {
            "_id": "4396640269334312364b32ca",
            "name": "Yaron Lola	",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (932) 233-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/8.jpg"

        },
        {
            "_id": "4326640269334312364b32ca",
            "name": "Ori Sharon	",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (932) 233-3824",
            "imgUrl": "https://randomuser.me/api/portraits/women/9.jpg"

        },
    ]
}