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
        let newNode = {
            value: val,
            next: null
        };
        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
        return newNode;
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

    const remove = (n) => {
        let prev = get(n - 1);

        if (n === 0) {
            head = head.next;
        } else if (get(n) === tail) {
            prev.next = null;
            tail = prev;
        } else if (get(n) === false) {
            return false
        } else {
            prev.next = get(n + 1);
        }
    };

    const insert = (val, num) => {
        let node = {
            value: val,
            next: null
        };
        let prev = get(num - 1);

        if (num === 0) {
            node.next = head;
            head = node;
        } else if (get(num) === false) {
            return false;
        } else {
            node.next = get(num);
            prev.next = node;
        }
    }

    return methods = {
        getHead,
        getTail,
        add,
        get,
        remove,
        insert
    }
};