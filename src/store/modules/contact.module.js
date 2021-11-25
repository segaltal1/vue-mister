import { contactService } from "../../services/contactService"
export default {
    state: {
        contacts: [],
        filterBy: null
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        contactsToShow({ filterBy, contacts }) {
            if (!filterBy) return contacts
            const reg = RegExp(filterBy, 'i')
            return contacts.filter((contact) => (
                reg.test(contact.name) || reg.test(contact.phone)
            ));
        }

    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        setFilter(state, { filterBy }) {
            state.filterBy = JSON.parse(JSON.stringify(filterBy))
        },
        removeContact(state, { id }) {
            const idx = state.contacts.findIndex(contact => contact._id === id);
            if(idx === -1) return
            state.contacts.splice(idx, 1);
        },
        saveContact(state,{contact}){
            const idx = state.contacts.findIndex(currContact => currContact._id === contact._id);
            if(idx ===-1) state.contacts.push(contact)
            else state.contacts.splice(idx, 1, contact);

        }
    },
    actions: {
        async loadUsers(context) {
            const contacts = await contactService.query()
            context.commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, { id }) {
            await contactService.remove(id)
            commit({ type: 'removeContact', id })
        },
        async saveContact({ commit }, { contact }) {
            await contactService.save(contact)
            commit({type:'saveContact',contact})
        }
    }
}