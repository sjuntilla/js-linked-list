/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

    let head = null;
    let tail = null;

    const getHead = () => {
        return head;
    };
    const getTail = () => {
        return tail;
    };
    const add = (val) => {
        let newN = {
            value: val,
            next: null
        };

        if (!head) {
            head = newN;
            tail = newN;
        } else {
            tail.next = newN;
            tail = newN;
        }
        return newN;
    };

    const get = (num) => {
        let node = getHead();

    };


    const remove = (num) => {

    };

    const insert = (val, num) => {

    };

    return methods = {
        getHead,
        getTail,
        add,
        get,
        remove,
        insert
    }
};