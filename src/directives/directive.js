import Vue from 'vue';


const focused = {
    inserted(el) {
        if(window.innerWidth <= 550) return
        el.focus()
    }
};
export default focused

Vue.directive('focuse', focused)