class StaffList {
    constructor() {
        this.members = [];
    }
    add(name, age) {
        if (age > 20) {
            this.members.push(name)                 
        } else {
            throw new Error("Staff member age must be greater than 20")
        }
    }
    remove(name) {
        const index = this.members.findIndex(x => x === name);
        if (index !== -1) {
          this.members.splice(index, 1);
          return true;
        }
        else{
            return false;
        }
      }
    getSize() {
        return this.members.length;
    }
}

// driver code
let i = new StaffList;
i.add('mike', 25)
i.add('will', 30);
i.add('nancy', 30);
i.add('jane', 26);
console.log(i.remove('john'));
console.log(i);