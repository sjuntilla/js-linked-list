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
        let node = {
            value: val,
            next: null
        };

        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
        return node;
    };

    const get = (num) => {
        let node = head;
        let i = 0;
        while (node) {
            if (num === i) {
                return node;
            }
            i++;
            node = node.next;
        }
        return false;
    };


    const remove = (num) => {
        if (num === 0) {
            head = head.next;
        } else if (get(num) === tail) {
            get(num - 1).next = null;
            tail = get(num - 1);
        } else if (get(num) === false) {
            return false;
        } else {
            get(num - 1).next = get(num + 1);
        }

    };

    const insert = (val, num) => {
        let node = {
            value: val,
            next: null
        };

        if (num === 0) {
            node.next = head;
            head = node;
        } else if (get(num) === false) {
            return false;
        } else {
            node.next = get(num);
            get(num - 1).next = node;
        }

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