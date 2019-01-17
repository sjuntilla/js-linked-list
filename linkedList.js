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
        let node = head;
        if (num < 0) {
            return false;
        } else {
            for (let i = 0; i < num; i++) {
                if (node.next === null) {
                    return false;
                }
                node = node.next;
            }
            return node;

        }
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
        let newN = {
            value: val,
            next: next
        };
        if (num === 0) {
            head = head.next;
            head = newN;
        } else if (get(num) === tail) {
            add(val);
        } else if (get(num) === false) {
            return false;
        } else {
            get(num - 1).next = newN;
            newN.next = get(num + 1);
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