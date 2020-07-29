// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


//grider says this is a pretty generic way to write a queue
//still a bit unsure on why they are necessary
//nonetheless interviewers will still ask for 
//writing a que for xyz or whatever
class Queue {
    constructor(){
        this.data = [];
    }
    
    add(record){
        this.data.unshift(record)
    }
    remove(){
        return this.data.pop()
    }
}

module.exports = Queue;
